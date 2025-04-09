import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookCard from './BookCard';
import './BrowseBooks.css';
// used to filter books
const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.bookList);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = book.category === category;
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                          book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books">
      <h2>Browse {category} Books</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="no-results">No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
