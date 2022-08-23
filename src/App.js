import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useHttpAxios from './hooks/use-http-axios';

import Layout from './components/Main Header/Layout/Layout';
import Main from './components/Main/Main';
import About from './components/About/About';
import Question from './components/Question General/Question/Question';
import SignUp from './components/Authentication/SignUp/SignUp';
import SignIn from './components/Authentication/SignIn/SignIn';

import FunFactModal from './components/Modals/FunFactModal';

import { authenticationActions } from './store/authentication-slice';
import ProtectedRoute from './components/Authentication/ProtectedRoute/ProtectedRoute';

function App() {

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => state);

  const navigate = useNavigate();

  const [defaultNavigation, setDefaultNavigation] = useState('');

  const { error, isLoading, sendRequest: checkIfLoginRequest } = useHttpAxios();

  let token = sessionStorage.getItem('token');
  useEffect(() => {
    if (token) {
      checkIfLoginRequest({
        method: 'POST',
        url: 'http://localhost:8000/auth-elrom/check-sign-in',
        headers: { 'Authorization': `Bearer ${token}` }
      }, (data) => {
        console.log(data);
        if (data) {
          dispatch(authenticationActions.loginHandler({ token }))
        }
      })
    }
  }, [token])


  useEffect(() => {
    if (error) {
      console.log(error);
      navigate('/sign-in', { replace: true })
    }
  }, [error])

  const { isFunFactShown } = useSelector(state => state.countries)

  return (
    <Layout>
      {isFunFactShown && <FunFactModal />}
      <Routes>
        <Route path='/' element={<Navigate to={isLoggedIn ? '/welcome' : '/sign-in'} />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/welcome' element={<Main />} />
          <Route path='/question' element={<Question />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
