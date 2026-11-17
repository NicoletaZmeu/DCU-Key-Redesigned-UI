import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Profile from './pages/Profile.jsx';
import Results from './pages/Results.jsx';
import Registration from './pages/Registration.jsx';
import './App.css'

function App() {
    const [selectedCourse, setSelectedCourse] = useState("");

    return (
        <div className='app'>
            <Header
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
            />
            <main className='content'>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/results" element={<Results selectedCourse={selectedCourse} />} />
                    <Route path="/results/:year/:semester" element={<Results selectedCourse={selectedCourse} />} />
                </Routes> 
            </main>
            
            <Footer/>
        </div>
    );
}

export default App;
