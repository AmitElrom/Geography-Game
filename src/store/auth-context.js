import { useState, createContext } from "react";

const authContext = createContext({
  token: "",
  isLoggedIn: false,
  loginHandler: (token, userData) => { },
  logoutHandler: () => { },
  userData: {},
  updateUserInfo: (updatedUserData) => { },
  isEmailSent: false,
  isCodeVer: false,
  setIsEmailCodeVerified: () => { },
  setIsEmailSentForgotPassword: () => { }
});

export const AuthContextProvider = ({ children }) => {
  let initialToken = localStorage.getItem("token");
  let initialIsEmailSentForgotPassword = localStorage.getItem("forgot-password-email-sent");
  let initialIsEmailCodeVerified = localStorage.getItem("token-reset-password");
  const [token, setToken] = useState(initialToken);
  const userDataFromSS = JSON.parse(localStorage.getItem("user-data"));
  const [user, setUser] = useState(userDataFromSS);
  const [isEmailSentForgotPassword, setIsEmailSentForgotPassword] = useState(initialIsEmailSentForgotPassword);
  const [isEmailCodeVerified, setIsEmailCodeVerified] = useState(initialIsEmailCodeVerified);

  let isLoggedIn = !!token;
  let isEmailSent = !!isEmailSentForgotPassword;
  let isCodeVer = !!isEmailCodeVerified;

  const loginHandler = (token, userData) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user-data", JSON.stringify(userData));
    userData.lastMatchLevel && localStorage.setItem("last-match-level", userData?.lastMatchLevel);
    setUser(userData)
  };

  const logoutHandler = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user-data");
    localStorage.getItem("last-match-level") && localStorage.removeItem("last-match-level");
  };

  const updateUserInfo = (updatedUserData) => {
    const newUserData = { ...userDataFromSS, ...updatedUserData, fullName: `${updatedUserData.firstName} ${updatedUserData.lastName}` };
    localStorage.setItem('user-data', JSON.stringify(newUserData));
    setUser(newUserData);
  };

  const contextValue = {
    token,
    isLoggedIn,
    loginHandler,
    logoutHandler,
    userData: { ...user },
    updateUserInfo,
    isEmailSent,
    isCodeVer,
    setIsEmailCodeVerified,
    setIsEmailSentForgotPassword
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default authContext;
