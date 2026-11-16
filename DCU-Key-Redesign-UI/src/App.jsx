import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Profile from './pages/Profile.jsx';
import Results from './pages/Results.jsx';
import Registration from './pages/Registration.jsx';

function App() {

  return(
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh'}}>
      <Header />

      <Routes>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </div>

  );
  
}

export default App;
