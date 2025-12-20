import { useState, useMemo } from 'react';
import { MOCK_BOOKS } from '../app.constants';

export const useBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
    
  const filteredBooks = useMemo(() => {
    if (!searchTerm) return MOCK_BOOKS;
    
    const lowerTerm = searchTerm.toLowerCase();
    return MOCK_BOOKS.filter((book) => 
      book.title.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

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
