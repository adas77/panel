import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type Props = {
    children: any
}

const ProtectedRoute = ({ children, ...props }: Props) => {
    const [isAuth] = useSelector((s: GlobalState) => {
        return [s.isAuth]
    })

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return children

};

export default ProtectedRoute