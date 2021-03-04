import App from './App.vue';
import AddScore from './components/AddScore.vue';
import MyScore from './components/MyScore.vue';
import LeaderBoard from "@/components/LeaderBoard.vue";
import NotFound from '@/components/NotFound.vue';

const routes = [
  { path: '/', component: App },
  { path: '/addscore', component: AddScore },
  { path: '/myscore', component: MyScore },
  { path: '/leaderboard', component: LeaderBoard },
  { path: '*', component: NotFound }
]

export default routes;
