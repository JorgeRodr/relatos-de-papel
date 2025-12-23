import { useState } from 'react';
import { MOCK_BOOKS } from '../app.constants';

export const useBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
    
  const filteredBooks = searchTerm
    ? MOCK_BOOKS.filter((book) => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : MOCK_BOOKS;

  const getBookById = id => {
    return MOCK_BOOKS.find(b => b.id === id);
  };

  return {
    books: filteredBooks,
    searchTerm,
    setSearchTerm,
    getBookById,
    allBooks: MOCK_BOOKS
  };
};
