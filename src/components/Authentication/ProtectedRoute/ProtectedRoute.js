import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
    const { isLoggedIn } = useSelector(state => state.auth);

    return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;