import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: {
    user: {
      token: '',
      displayName: '',
      pullUp: null,
      pushUp: null,
      dips: null,
      sheathing: null,
      error: null
    },
    generatedWod: null,
    leaderBoard: {
      pullUp: [],
      pushUp: [],
      dips: [],
      sheathing: [],
      error: null
    },
    isLoading: false
  },
  mutations: {
    ['LOGIN_SUCCESS'] (state, payload) {
      state.isLoading = false;
      state.user = { ...state.user, ...payload };
    },
    ['LOGIN_FAILURE'] (state, payload) {
      state.isLoading = false;
      state.user.error = payload;
    },
    ['LOGIN_REQUEST'] (state) {
      state.isLoading = true;
    },
    ['LOGOUT_REQUEST'] (state) {
      state.isLoading = true;
    },
    ['LOGOUT_SUCCESS'] (state) {
      state.isLoading = false;
      state.user = {
        token: '',
        displayName: '',
        pullUp: null,
        pushUp: null,
        dips: null,
        sheathing: null,
      };
    },
    ['LOGOUT_FAILURE'] (state, payload) {
      state.isLoading = false;
      state.user.error = payload;
    },
    ['UPDATE_USER_REQUEST'] (state) {
      state.isLoading = true;
    },
    ['UPDATE_USER_SUCCESS'] (state, payload) {
      state.isLoading = false;
      state.user = { ...state.user, ...payload };
    },
    ['UPDATE_USER_FAILURE'] (state, payload) {
      state.isLoading = false;
      state.user.error = payload;
    },
    ['LEADER_BOARD_REQUEST'] (state) {
      state.isLoading = true;
    },
    ['LEADER_BOARD_SUCCESS'] (state, payload) {
      state.isLoading = false;
      state.leaderBoard = { ...state.leaderBoard, ...payload };
    },
    ['LEADER_BOARD_FAILURE'] (state, payload) {
      state.isLoading = false;
      state.user.error = payload;
    },
    ['CREATE_WOD'] (state, payload) {
      console.log('CREATE_WOD', payload);
      state.generatedWod = payload;
    }
  },
  actions: {
    async loginWithGoogle({ commit }) {
      commit('LOGIN_REQUEST');
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        const auth = await firebase.auth().signInWithPopup(provider);
        const { credential, user, additionalUserInfo } = auth;
        const token = credential.accessToken;
        if (additionalUserInfo.isNewUser) {
          firebase.firestore().collection("users").doc(user.email).set({
            displayName: user.displayName,
            email: user.email
          });
          commit('LOGIN_SUCCESS', { token, email: user.email, displayName: user.displayName });
        } else {
          try {
            let newUser = await firebase.firestore().collection("users").doc(user.email).get();
            newUser = newUser.data();
            commit('LOGIN_SUCCESS', { token, ...newUser });
          } catch (error) {
            console.log(error);
            commit('LOGIN_FAILURE', error);
          }
        }

      } catch(error) {
        commit('LOGIN_FAILURE', error);
      }
    },
    async logoutGoogleAuth({ commit }) {
      commit('LOGOUT_REQUEST');
      try {
        await firebase.auth().signOut().then(() => {
          commit('LOGOUT_SUCCESS')
        });
      } catch(error) {
        commit('LOGOUT_FAILURE', error);
      }
    },
    async submitReps({ commit, state }, form) {
      const { email } = state.user;
      commit('UPDATE_USER_REQUEST', form);
      try {
        await firebase.firestore().collection("users").doc(email).set({
          ...state.user,
          ...form
        });
        commit('UPDATE_USER_SUCCESS', form);
      } catch (e) {
        commit('UPDATE_USER_FAILURE', e);
      }
    },
    async getLeaderBoard({ commit }) {
      const types = ['pullUp', 'pushUp', 'dips', 'sheathing'];
      commit('LEADER_BOARD_REQUEST');
      try {
        types.forEach(async type => {
          const listBestReps = await firebase.firestore().collection("users").orderBy(type, "desc").limit(3).get();
          const collectionUsers = [];
          const defaultLeaderboard = [{
            displayName: 'None',
            [type]: '/'
          }, { displayName: 'None',
            [type]: '/'
          }, { displayName: 'None',
            [type]: '/'
          }];
          listBestReps.forEach( userDoc => {
            let newUserDoc = userDoc.data();
            newUserDoc = { [type]: newUserDoc[type], displayName: newUserDoc.displayName };
            collectionUsers.push(newUserDoc);
          });
          const tmp = collectionUsers.length > 2 ? collectionUsers : [...collectionUsers, ...defaultLeaderboard.slice(0, 3 - collectionUsers.length)];
          commit('LEADER_BOARD_SUCCESS', { [type]: tmp });
        })
      } catch (e) {
        commit('LEADER_BOARD_FAILURE', e);
      }
    },
    generateWod({ commit }, wod) {
      const { mains, subs } = wod;
      let nbExsMain = [0, 1, 2, 3, 4];
      let nbExsSub = [0, 1, 2, 3];
      const ex1 = nbExsMain[Math.floor(Math.random() * nbExsMain.length)];
      nbExsMain.splice(ex1, 1);
      const ex3 = nbExsMain[Math.floor(Math.random() * nbExsMain.length)];
      nbExsMain.splice(ex3, 1);
      const ex2 = nbExsSub[Math.floor(Math.random() * nbExsSub.length)];
      nbExsSub.splice(ex2, 1);
      const ex4 = nbExsSub[Math.floor(Math.random() * nbExsSub.length)];
      nbExsSub.splice(ex4, 1);
      const generatedWod = [mains[ex1], subs[ex2], mains[ex3], subs[ex4]];
      commit('CREATE_WOD', generatedWod);
    }
  },
  plugins: [vuexLocalStorage.plugin]
});

export default store;
