import { useState, createContext } from "react";

const authContext = createContext({
  token: "",
  isLoggedIn: false,
  loginHandler: (token, userData) => { },
  logoutHandler: () => { },
  userData: {},
  updateUserInfo: (updatedUserData) => { }
});

export const AuthContextProvider = ({ children }) => {
  let initialToken = sessionStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userDataFromSS = JSON.parse(sessionStorage.getItem("user-data"));
  const [user, setUser] = useState(userDataFromSS);

  let isLoggedIn = !!token;

  const loginHandler = (token, userData, userAdditional) => {
    setToken(token);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user-data", JSON.stringify(userData));
  };

  const logoutHandler = () => {
    setToken(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user-data");
  };

  const updateUserInfo = (updatedUserData) => {
    const newUserData = { ...userDataFromSS, ...updatedUserData, fullName: `${updatedUserData.firstName} ${updatedUserData.lastName}` };
    sessionStorage.setItem('user-data', JSON.stringify(newUserData));
    setUser(newUserData);
  };

  const contextValue = {
    token,
    isLoggedIn,
    loginHandler,
    logoutHandler,
    userData: { ...user },
    updateUserInfo
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default authContext;
