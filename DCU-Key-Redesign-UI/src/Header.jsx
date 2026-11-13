import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/' aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to='/profile' aria-current="page">Profile</Link>
                </li>
                <li>
                    <Link to='/results' aria-current="page">Results</Link>
                </li>
                <li>
                    <Link to='/registration' aria-current="page">Module Registration</Link>
                </li>
            </ul>
        </nav>
    );

}

export default Header;