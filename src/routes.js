import Home from './pages/Home';
import Drink from './pages/Drink';
import Food from './pages/Food';
import Sweets from './pages/Sweets';
import Contact from './pages/Contact';

const routes = [
    { path: '/', component: Home, exact : true },
    { path: '/drink', component: Drink},
    { path: '/food', component: Food},
    { path: '/sweets', component: Sweets},
    { path: '/contact', component: Contact},
  ];
  
  export default routes;