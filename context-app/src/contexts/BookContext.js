import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'Sapiens', id: 1},
    {title: 'Prisoners of Geography', id: 2},
    {title: 'Divided', id: 3},
    {title: 'Human Instinct', id: 4}
  ])
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
