import { Link } from 'react-router-dom';
import './NotFound.css';
// this is error page
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>🔎 404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="h-link">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
