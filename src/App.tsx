import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Charts from './components/organisms/Charts';
import Opinions from './components/organisms/Opinions';
import Orders from './components/organisms/Orders';
import Widgets from './components/organisms/Widgets';
import Error from './components/pages/Error';
import Login from './components/pages/Login';
import ProtectedRoute from './components/pages/ProtectedRoute';
import { persistor, store } from './redux/store';
import PrivateRoute from './components/pages/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
      errorElement: <Error />,
      children:
        [
          {
            path: "/opinions",
            element: <ProtectedRoute ><Opinions /></ProtectedRoute>,
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
            //   {path: "unpaid", element: <Orders /> },
            //   {path: "unsent", element: <Orders /> },
            //   {path: "returns", element: <Orders /> },

            // ]
          },
          {
            path: "/widgets",
            element: <Widgets />,
            errorElement: <Error />
          },
        ]
    },

    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />
    },



  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;