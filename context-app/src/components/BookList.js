import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light: dark;
    return (
      <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>Becoming</li>
          <li style={{ background: theme.ui }}>Game of Thrones</li>
          <li style={{ background: theme.ui }}>100 años de soledad</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
