import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/root';
import NotFound from './pages/notFound';
import Home from './pages/home';

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
