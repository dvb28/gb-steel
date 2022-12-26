import About from 'src/pages/About';
import Achievement from 'src/pages/Achievement';
import Services from 'src/pages/Services';
import Home from '../pages/Home';

export const publicRoute = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/achievement', component: Achievement },
    { path: '/services', component: Services },
];
