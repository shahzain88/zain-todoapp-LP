
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>Zain Todo app</h1></Link>
            <div className="navbar-links">
                <Link to="/">app</Link>
                <Link to="/download" className="btn-download">download</Link>
            </div>
        </nav>
    );
}

export default Navbar;