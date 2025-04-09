// Add book to the sore
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
  const [Data, setData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Fantasy'];
// validating the form
  const filled = () => {
    const newErrors = {};
    Object.entries(Data).forEach(([key, value]) => {
      if (!value) newErrors[key] = `${key} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
// handling form data
  const Change = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault(); // handle default function
    if (!filled()) return;

    const newBook = {
      ...Data,
      id: Date.now().toString(),
    };
    dispatch(addBook(newBook));
    navigate(`/books/${Data.category}`);
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={Submit}>
        <input
          name="title"
          placeholder="Title"
          value={Data.title}
          onChange={Change}
        />
        {errors.title && <span className="error">{errors.title}</span>}

        <input
          name="author"
          placeholder="Author"
          value={Data.author}
          onChange={Change}
        />
        {errors.author && <span className="error">{errors.author}</span>}

        <select name="category" value={Data.category} onChange={Change}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <span className="error">{errors.category}</span>}

        <textarea
          name="description"
          placeholder="Description"
          value={Data.description}
          onChange={Change}
        ></textarea>
        {errors.description && <span className="error">{errors.description}</span>}

        <input
          name="rating"
          placeholder="Rating (e.g: 4.6)"
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={Data.rating}
          onChange={Change}
        />
        {errors.rating && <span className="error">{errors.rating}</span>}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
