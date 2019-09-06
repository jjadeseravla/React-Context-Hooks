import React, { Component } from 'react';

class BookList extends Component {
  render() {
    return (
      <div className='book-list'>
        <ul>
          <li>Becoming</li>
          <li>Game of Thrones</li>
          <li>100 años de soledad</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
