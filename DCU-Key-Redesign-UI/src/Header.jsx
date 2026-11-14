import { Link } from 'react-router-dom';
import './Header.css'

function Header(){
    return(
        <nav>
            <div className='top-nav'>
                <div className='divider-1'>
                    
                    <div>
                        <a href="/"><img className='logo' src="/logo.png" alt="dcu logo" /></a>
                    </div>
                    <div >
                        <p className='secondary'>Student Portal</p>
                        <p >Loading</p>
                    </div>
                
                </div>

                <div className='divider-2'>
                    <ul>
                        <li className='secondary'>
                            <Link to='/' aria-current="page">Home</Link>
                        </li>

                        <li className='secondary'>
                            <Link to='/profile' aria-current="page">Profile</Link>
                        </li>

                        <li className='secondary'>
                            <Link to='/results' aria-current="page">Results</Link>
                        </li>

                        <li className='secondary'>
                            <Link to='/registration' aria-current="page">Module Registration</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );

}

export default Header;