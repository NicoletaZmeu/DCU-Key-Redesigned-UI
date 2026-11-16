import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css'


function Header({selectedCourse, setSelectedCourse}){

    const location = useLocation();
    const navigate = useNavigate();

    const handleSemesterChange = (event, year) => {
        const semester = event.target.value;
            if (semester) {
                navigate(`/results/${year}/${semester}`);
            }
    };

    return(
        <>
        <nav className='top-nav'>
            
                <div className='one'>
                    <div>
                        <Link to="/profile">
                            <img className="logo" src="/logo.png" alt="dcu logo" />
                        </Link>
                    </div>

                    <div className='titles'>
                        <p className='title-one'>DUBLIN CITY UNIVERSITY</p>
                        <p className='title-two'>DCU Student Portal</p>
                    </div>
                </div>

            {location.pathname.startsWith('/results') && (
                <>
                    <div className='two'>
                        <p className='title-one'>COURSE</p>
                        <select 
                            className="course"
                            value={selectedCourse}
                            onChange={(event) => setSelectedCourse(event.target.value)}
                        >
                            <option value="">Select a course</option>
                            <option value="DC121">BSc Computer Science</option>
                        </select>
                    </div>

                    <div className='three'>
                        <p className='title-one'>ACADEMIC YEAR</p>
                        <div className='years'>
                            {[1, 2, 3, 4].map((year) => (
                                <select 
                                    key={year} 
                                    className={
                                        Number(location.pathname.split('/')[2]) === year
                                            ? 'selected-year'
                                            : ''
                                    }
                                    value="" 
                                    onChange={(event) => handleSemesterChange(event, year)}
                                
                                >
                                    <option value="" hidden>Year {year}</option>
                                    <option value="1">Semester 1</option>
                                    <option value="2">Semester 2</option>
                                </select>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </nav>

        <hr />

        <nav className='bottom-nav'>
            <NavLink className='title-one' to='/profile'>Student</NavLink>
            <NavLink className='title-one' to='/registration'>Module Selection</NavLink>
            <NavLink className='title-one' to='/results'>Results</NavLink>
        </nav>
        </>
    );

}

export default Header;