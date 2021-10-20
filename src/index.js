import React from 'react';
import ReactDom from 'react-dom';

//imports
import './index.css';
// using named import, see file for the setup
import { books } from './books';
// using default import, check thr Book file for the setup
import Book from './Book';

function BookList() {
  return (
    <section className=' booklist'>
      {books.map((item) => {
        return <Book key={item.id} {...item}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
