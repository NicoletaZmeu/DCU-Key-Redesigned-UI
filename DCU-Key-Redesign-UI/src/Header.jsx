import { Link } from 'react-router-dom';
import './Header.css'

function Header(){
    return(
        <nav>
            
            <div className='one'>
                <div><a href="/">
                    <img className='logo' src="/logo.png" alt="dcu logo" /></a>
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
                    <select name="year" id="year">
                        <option value="">Year 1</option>
                    </select>
                    <select name="" id="">
                        <option value="">Year 2</option>
                    </select>
                    <select name="" id="">
                        <option value="">Year 3</option>
                    </select>
                    <select name="" id="">
                        <option value="">Year 4</option>
                    </select>
                </div>
            </div>
        </nav>
    );

}

export default Header;