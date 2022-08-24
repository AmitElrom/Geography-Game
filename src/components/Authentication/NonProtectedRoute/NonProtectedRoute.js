import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import authContext from "../../../store/auth-context";


const NonProtectedRoute = () => {

    const { isLoggedIn } = useContext(authContext);

    return !isLoggedIn ? <Outlet /> : <Navigate to='/welcome' />;
}

export default NonProtectedRoute