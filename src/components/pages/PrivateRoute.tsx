import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const [isAuth] = useSelector((state: GlobalState) => [state.isAuth])
  const location = useLocation();
  return isAuth
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}

export default PrivateRoute