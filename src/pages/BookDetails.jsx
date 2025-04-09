import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetails.css';
// showing full details of the book
const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.bookList.find((b) => b.id === id)
  );

  if (!book) {
    return <div className="book-details">Book not found.</div>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;
