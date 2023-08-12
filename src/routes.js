import Home from './pages/Home';
import Drink from './pages/Drink';
// import Food from './pages/Food';
// import Sweet from './pages/Sweet';
// import Contact from './pages/Contact';

const routes = [
    { path: '/', component: Home, exact : true },
    { path: '/drink', component: Drink,},
    // { path: '/food', component: Food,},
    // { path: '/sweet', component: Sweet,},
    // { path: '/contact', component: Contact,},
  ];
  
  export default routes;