import {
  createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse,
} from 'react-router-dom';
import Root from './pages/root';
import NotFound from './pages/notFound';
import Home from './pages/home';

const App = () => {
  const ErrorBoundary = () => {
    const error = useRouteError();
    return (
      (isRouteErrorResponse(error) && error.status === 404)
        ? <NotFound /> : <div>Oops! Something went wrong.</div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorBoundary />,
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
