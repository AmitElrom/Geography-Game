import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import authContext from '../../../store/auth-context';

const ProtectedRoute = (props) => {
    const { isLoggedIn } = useContext(authContext);

    return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;