import { Link } from 'react-router-dom';
import './BookCard.css';
const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <Link to={`/book/${book.id}`} className="details-btn">View Details</Link>
    </div>
  );
};

export default BookCard;
