import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Profile from './pages/Profile.jsx';
import Results from './pages/Results.jsx';
import Registration from './pages/Registration.jsx';

function App() {
    const [selectedCourse, setSelectedCourse] = useState("");

    return (
        <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Header
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
            />

            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/results" element={<Results selectedCourse={selectedCourse} />} />
                <Route path="/results/:year/:semester" element={<Results selectedCourse={selectedCourse} />} />
            </Routes>
        </div>
    );
}

export default App;
