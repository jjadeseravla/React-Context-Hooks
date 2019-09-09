import React, { createContext, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1> Jade's reading list </h1>
        <p> Currently you have { books.length } books to get through ... </p>
      </div>
  );
}

export default Navbar;
