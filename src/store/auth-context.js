import { useState, createContext } from "react";

const authContext = createContext({
  token: "",
  isLoggedIn: false,
  loginHandler: (token) => {},
  logoutHandler: () => {},
  userData: {},
});

export const AuthContextProvider = ({ children }) => {
  let initialToken = sessionStorage.getItem("token");
  const userDataFromSS = JSON.parse(sessionStorage.getItem("user-data"));
  const [token, setToken] = useState(initialToken);

  let isLoggedIn = !!token;

  const loginHandler = (token, userData) => {
    setToken(token);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user-data", JSON.stringify(userData));
  };

  const logoutHandler = () => {
    setToken(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user-data");
  };

  const contextValue = {
    token,
    isLoggedIn,
    loginHandler,
    logoutHandler,
    userData: { ...userDataFromSS },
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default authContext;
