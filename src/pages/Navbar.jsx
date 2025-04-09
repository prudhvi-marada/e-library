import { Link } from 'react-router-dom';
import './Navbar.css';
// this is the header 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📚 E-Library</div>
      <ul className="links">
        <li><Link to="/">🏠Home </Link></li>
        <li><Link to="/books/Fiction">🔎Browse Books </Link></li>
        <li><Link to="/add">➕Add Book </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
