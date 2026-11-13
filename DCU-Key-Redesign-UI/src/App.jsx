import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Results from './pages/Results.jsx';
import Registration from './pages/Registration.jsx';

function App() {

  return(
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </>

  );
  
}

export default App;
