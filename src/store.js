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
          listBestReps.forEach( userDoc => {
            let newUserDoc = userDoc.data();
            newUserDoc = { [type]: newUserDoc[type], displayName: newUserDoc.displayName };
            collectionUsers.push(newUserDoc);
          })
          commit('LEADER_BOARD_SUCCESS', { [type]: collectionUsers });
        })
      } catch (e) {
        commit('LEADER_BOARD_FAILURE', e);
      }
    }
  },
  plugins: [vuexLocalStorage.plugin]
});

export default store;
