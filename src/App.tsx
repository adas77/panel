import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Charts from './components/pages/Charts';
import Error from './components/pages/Error';
import Login from './components/pages/Login';
import Opinions from './components/pages/Opinions';
import Orders from './components/pages/Orders';
import PrivateRoute from './components/pages/PrivateRoute';
import Qualities from './components/pages/Qualities';
import Rankings from './components/pages/Rankings';
import Widgets from './components/pages/Widgets';
import { persistor, store } from './redux/store';

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
            element: <Orders type={'UNPAID'} />,
            errorElement: <Error />,
          },
          { path: "/orders/unpaid", element: <Orders type={'UNPAID'} />, errorElement: <Error />, },
          { path: "/orders/unsent", element: <Orders type={'UNSENT'} />, errorElement: <Error />, },
          { path: "/orders/returns", element: <Orders type={'RETURN'} />, errorElement: <Error />, },
          {
            path: "/rankings",
            element: <Rankings />,
            errorElement: <Error />
          },
          {
            path: "/widgets",
            element: <Widgets />,
            errorElement: <Error />
          },
          {
            path: "/quality",
            element: <Qualities />,
            errorElement: <Error />
          },
          {
            path: "/",
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