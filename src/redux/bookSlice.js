import { createSlice } from '@reduxjs/toolkit';
// dummy data 
const initialState = {
  bookList : [
    // Fiction
    {
      id: '1',
      title: 'The God of Small Things',
      author: 'Arundhati Roy',
      category: 'Fiction',
      description: 'A tragic love story set in Kerala, weaving personal and political threads.',
      rating: '4.5'
    },
    {
      id: '2',
      title: 'Train to Pakistan',
      author: 'Khushwant Singh',
      category: 'Fiction',
      description: 'A powerful novel about the Partition of India in 1947.',
      rating: '4.4'
    },
    {
      id: '3',
      title: 'Palace of Illusions',
      author: 'Chitra Banerjee Divakaruni',
      category: 'Fiction',
      description: 'A retelling of the Mahabharata from Draupadi’s perspective.',
      rating: '4.6'
    },
  
    // Non-Fiction
    {
      id: '4',
      title: 'India After Gandhi',
      author: 'Ramachandra Guha',
      category: 'Non-Fiction',
      description: 'An epic narrative of Indian democracy after independence.',
      rating: '4.7'
    },
    {
      id: '5',
      title: 'Why I am an Atheist',
      author: 'Bhagat Singh',
      category: 'Non-Fiction',
      description: 'The iconic revolutionary’s thoughts on religion and rationalism.',
      rating: '4.6'
    },
    {
      id: '6',
      title: 'The Argumentative Indian',
      author: 'Amartya Sen',
      category: 'Non-Fiction',
      description: 'Essays exploring India’s rich intellectual history.',
      rating: '4.5'
    },
  
    // Sci-Fi
    {
      id: '7',
      title: 'Sultana’s Dream',
      author: 'Rokeya Sakhawat Hossain',
      category: 'Sci-Fi',
      description: 'A feminist utopian sci-fi set in a reversed gender-role society.',
      rating: '4.3'
    },
    {
      id: '8',
      title: 'The Beast with Nine Billion Feet',
      author: 'Anil Menon',
      category: 'Sci-Fi',
      description: 'A futuristic tale involving biotech and family in Pune.',
      rating: '4.2'
    },
    {
      id: '9',
      title: 'Turbulence',
      author: 'Samit Basu',
      category: 'Sci-Fi',
      description: 'Indian superheroes with powers on a flight from London to Delhi.',
      rating: '4.4'
    },
  
    // Biography
    {
      id: '10',
      title: 'Wings of Fire',
      author: 'A.P.J. Abdul Kalam',
      category: 'Biography',
      description: 'An autobiography of India’s beloved scientist and former president.',
      rating: '4.9'
    },
    {
      id: '11',
      title: 'My Experiments with Truth',
      author: 'Mahatma Gandhi',
      category: 'Biography',
      description: 'The autobiography of the Father of the Nation.',
      rating: '4.8'
    },
    {
      id: '12',
      title: 'Playing It My Way',
      author: 'Sachin Tendulkar',
      category: 'Biography',
      description: 'The life and career of India’s cricket legend.',
      rating: '4.7'
    },
  
    // Fantasy
    {
      id: '13',
      title: 'The Immortals of Meluha',
      author: 'Amish Tripathi',
      category: 'Fantasy',
      description: 'A mythological fiction reimagining Lord Shiva’s life.',
      rating: '4.6'
    },
    {
      id: '14',
      title: 'Ajaya: Roll of the Dice',
      author: 'Anand Neelakantan',
      category: 'Fantasy',
      description: 'The Mahabharata told from Duryodhana’s point of view.',
      rating: '4.5'
    },
    {
      id: '15',
      title: 'The Rise of Hastinapur',
      author: 'Sharath Komarraju',
      category: 'Fantasy',
      description: 'Mythological women of the Mahabharata take center stage.',
      rating: '4.4'
    },
    {
      id: '16',
      title: 'What Happen After Death',
      author: 'M.Prudhvi',
      category: 'Fiction',
      description: 'Mythological fictional story based on garuda puranam.',
      rating: '5'
    }
  ]
  
};
// creating slice for a store
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
