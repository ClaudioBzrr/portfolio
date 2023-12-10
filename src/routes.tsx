import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { IRoute } from './types/route';

export const routes: IRoute[] = [
  {
    name: 'Início',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Sobre mim',
    path: '/about',
    element: <About />,
  },
  {
    name: 'Contato',
    path: '/contact',
    element: <Contact />,
  },
];
