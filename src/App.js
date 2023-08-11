import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
