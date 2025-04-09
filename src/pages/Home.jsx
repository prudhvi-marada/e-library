import './Home.css';
import { Link } from 'react-router-dom';
// Home component
const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Fantasy'];
const popularBooks = [
  { title: 'Wings of Fire', id: '10' },
  { title: 'My Experiments with Truth', id: '11' },
  { title: 'What Happen After Death', id: '16' },
];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Online Library 📚</h1>
      <section className="categories">
        <h2>Categories</h2>
        <div className="list">
          {categories.map((cat) => (
            <Link key={cat} to={`/books/${cat}`} className="cat-item">
              {cat}
            </Link>
          ))}
        </div>
      </section>
      <section className="popular">
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
