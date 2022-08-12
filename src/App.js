import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './components/Main Header/Layout/Layout';
import Main from './components/Main/Main';
import About from './components/About/About';
import Question from './components/Question General/Question/Question';
import SignUp from './components/Authentication/SignUp/SignUp';
import SignIn from './components/Authentication/SignIn/SignIn';

import FunFactModal from './components/Modals/FunFactModal';

function App() {

  const { isFunFactShown } = useSelector(state => state)

  return (
    <Layout>
      {isFunFactShown && <FunFactModal />}
      <Routes>
        <Route path='/' element={<Navigate to='/welcome' />} />
        <Route path='/welcome' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/question' element={<Question />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
