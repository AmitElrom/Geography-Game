import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Main Header/Layout/Layout';
import Main from './components/Main/Main';
import About from './components/About/About';
import Question from './components/Question General/Question/Question';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/welcome' />} />
        <Route path='/welcome' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/countries/:countryNumber' element={<Question />} />
      </Routes>
    </Layout>
  );
}

export default App;
