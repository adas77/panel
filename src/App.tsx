import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Error from './pages/Error';
import Login, { GlobalAuthContext } from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';

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
    },

  ]);

  return (
    <GlobalAuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </GlobalAuthContext.Provider>
  );
}

export default App;