import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useHttpAxios from './hooks/use-http-axios';

import Layout from './components/Main Header/Layout/Layout';
import Main from './components/Main/Main';
import About from './components/About/About';
import Question from './components/Question General/Question/Question';
import SignUp from './components/Authentication/SignUp/SignUp';
import SignIn from './components/Authentication/SignIn/SignIn';
import UserPage from './components/User/UserPage';

import FunFactModal from './components/Modals/FunFactModal';

import ProtectedRoute from './components/Authentication/ProtectedRoute/ProtectedRoute';

import './App.css';
import NonProtectedRoute from './components/Authentication/NonProtectedRoute/NonProtectedRoute';

function App() {

  const { isLoggedIn } = useSelector(state => state);

  const { error, isLoading, sendRequest: checkIfLoginRequest } = useHttpAxios();

  const { isFunFactShown } = useSelector(state => state.countries)

  return (
    <Layout className={!isFunFactShown ? 'App' : 'App-fun-fact-shown'} >
      {isFunFactShown && <FunFactModal />}
      <Routes>
        <Route path='/' element={<Navigate to={isLoggedIn ? '/welcome' : '/sign-in'} />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/welcome' element={<Main />} />
          <Route path='/question' element={<Question />} />
          <Route path='/user-info' element={<UserPage />} />
        </Route>
        <Route path='/about' element={<About />} />
        {/* <Route element={<NonProtectedRoute />} > */}
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        {/* </Route> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Layout>
  );
}

export default App;
