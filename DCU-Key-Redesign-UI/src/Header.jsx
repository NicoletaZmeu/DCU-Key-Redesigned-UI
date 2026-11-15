import { Link, NavLink } from 'react-router-dom';
import './Header.css'

function Header(){
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

            <div className='two'>
                <p className='title-one'>COURSE</p>
                <select className="course">
                    <option value="">Select a course</option>
                    <option value="DC121">BSc Computer Science</option>
                </select>
            </div>

            <div className='three'>
                <p className='title-one'>ACADEMIC YEAR</p>
                <div className='years'>
                    <select name="Year" id="year">
                        <option value="">Year 1</option>
                        <option value="semester-one">Semester 1</option>
                        <option value="semester-two">Semester 2</option>
                    </select>
                    <select name="" id="">
                        <option value="">Year 2</option>
                        <option value="semester-one">Semester 1</option>
                        <option value="semester-two">Semester 2</option>
                    </select>
                    <select name="" id="">
                        <option value="">Year 3</option>
                        <option value="semester-one">Semester 1</option>
                        <option value="semester-two">Semester 2</option>
                    </select>
                    <select name="" id="">
                        <option value="">Year 4</option>
                        <option value="semester-one">Semester 1</option>
                        <option value="semester-two">Semester 2</option>
                    </select>
                </div>
            </div>
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