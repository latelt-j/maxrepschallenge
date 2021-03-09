import App from './App.vue';
import AddScore from './components/AddScore.vue';
import MyScore from './components/MyScore.vue';
import LeaderBoard from "@/components/LeaderBoard.vue";
import Rules from '@/components/Rules.vue';
import NotFound from '@/components/NotFound.vue';
import WodGenerator from "@/components/WodGenerator";

const routes = [
  { path: '/', component: App },
  { path: '/addscore', component: AddScore },
  { path: '/myscore', component: MyScore },
  { path: '/leaderboard', component: LeaderBoard },
  { path: '/rules', component: Rules },
  { path: '/wod', component: WodGenerator },
  { path: '*', component: NotFound }
]

export default routes;
