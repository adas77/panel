import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ChartLine from './components/atoms/ChartLine';
import Opinions from './components/organisms/Opinions';
import Orders from './components/organisms/Orders';
import Error from './pages/Error';
import Login, { GlobalAuthContext } from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import ChartBar from './components/atoms/ChartBar';
import Charts from './components/organisms/Charts';

function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
      errorElement: <Error />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/opinions",
      element: <Opinions />,
      errorElement: <Error />
    },
    {
      path: "/charts",
      element: <Charts />,
      errorElement: <Error />
    },
    {
      path: "/orders",
      element: <Orders />,
      errorElement: <Error />,
      // children: [
      //   { path: "unpaid", element: <Orders /> },
      //   { path: "unsent", element: <Orders /> },
      //   { path: "returns", element: <Orders /> },

      // ]
    },

  ]);

  return (
    <GlobalAuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </GlobalAuthContext.Provider>
  );
}

export default App;