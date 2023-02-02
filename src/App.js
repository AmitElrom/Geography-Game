import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout/Layout';
import Main from './components/Main/Main';
import About from './components/About/About';
import Question from './components/Question General/Question/Question';
import SignUp from './components/Authentication/SignUp/SignUp';
import SignIn from './components/Authentication/SignIn/SignIn';
import Scores from './components/User/Scores/Scores';
import Profile from './components/User/Profile/Profile';
import MatchSummary from './components/User/Scores/Match Summary/MatchSummary';
import ForgotPassword from './components/Authentication/Forgot Password/ForgotPassword';
import VerifyEmailCode from './components/Authentication/Verify Email Code/VerifyEmailCode';
import ChangePassword from './components/Authentication/Change Password/ChangePassword';
import ChangePasswordProfile from './components/User/Profile/Change Password/ChangePassword';

import FunFactModal from './components/Modals/FunFactModal';

import ProtectedRoute from './components/Authentication/ProtectedRoute/ProtectedRoute';

import './App.css';
import { useContext, useEffect, useState } from 'react';
import authContext from './store/auth-context';
import Badges from './components/User/Badges/Badges/Badges';
import PersonalInfo from './components/User/Profile/Personal Info/PersonalInfo';
import UpdatePersonalInfo from './components/User/Profile/Update Personal Info/UpdatePersonalInfo';
import DeleteUser from './components/User/Profile/Delete User/DeleteUser';

function App() {

  const { isLoggedIn, isCodeVer, isEmailSent } = useContext(authContext);

  const { isFunFactShown } = useSelector(state => state.countries);

  const [userInfo, setUserInfo] = useState([
    { title: "First Name", info: "" },
    { title: "Last Name", info: "" },
    { title: "Email", info: "" },
  ]);

  const { userData } = useContext(authContext);
  const { firstName, lastName, email } = userData;

  useEffect(() => {
    setUserInfo([
      { name: "firstName", title: "First Name", info: firstName },
      { name: "lastName", title: "Last Name", info: lastName },
      { name: "email", title: "Email", info: email },
    ]);
  }, [firstName, lastName, email]);

  return (
    <Layout className={!isFunFactShown ? 'App' : 'App-fun-fact-shown'} >
      {isFunFactShown && <FunFactModal />}
      <Routes>
        <Route path='/' element={<Navigate to={isLoggedIn ? '/welcome' : '/sign-in'} />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/welcome' element={<Main />} />
          <Route path='/question' element={<Question />} />
          <Route path='/match-summary' element={<MatchSummary />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/profile' element={<Profile />} >
            <Route path='/profile' element={<PersonalInfo userInfo={userInfo} />} />
            <Route path='/profile/delete-user' element={<DeleteUser />} />
            <Route path='/profile/change-password' element={<ChangePasswordProfile />} />
            <Route path='/profile/update-personal-info' element={<UpdatePersonalInfo userInfo={userInfo} />} />
          </Route>
          <Route path='/badges' element={<Badges />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        {isEmailSent && <Route path='/verify-email-code' element={<VerifyEmailCode />} />}
        {isCodeVer && <Route path='/change-password' element={<ChangePassword />} />}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Layout>
  );
}

export default App;
