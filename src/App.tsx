import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { routes } from './routes';

function Root() {
  return (
    <Routes>
      {routes.map((e, index) => (
        <Route key={index} path={e.path} element={e.element} />
      ))}
    </Routes>
  );
}

const router = createBrowserRouter([{ path: '*', Component: Root }]);

export function App() {
  return <RouterProvider router={router} />;
}
