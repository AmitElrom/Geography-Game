import { useState, createContext } from "react";

const authContext = createContext({
  token: "",
  isLoggedIn: false,
  loginHandler: (token) => { },
  logoutHandler: () => { },
});

export const AuthContextProvider = ({ children }) => {
  let initialToken = sessionStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  let isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    sessionStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    sessionStorage.removeItem('token');
  };

  const contextValue = {
    token,
    isLoggedIn,
    loginHandler,
    logoutHandler,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default authContext;
