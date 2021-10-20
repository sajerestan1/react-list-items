//Nested components
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//       <Talk />
//     </div>
//   );
// }

// const Person = () => <h2>sajere stanley</h2>;
// const Message = () => {
//   return <h2>This is Stan and this is my first component section</h2>;
// };

// const Talk = () => {
//   return <h3>I love to fuck my wife well</h3>;
// };

// creating simple amazon booklist by hard coding
// function BookList() {
//   return (
//     <section className=' booklist'>
//       <Book />

//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src='https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'
//       alt=''
//     />
//   );
// };

// const Title = () => {
//   return <h1>I Love You to the Moon and Back</h1>;
// };

// const Author = () => {
//   return <h3>Amelia Hepworth</h3>
// };

//creating the same amazon booklist by getting dynamic value using probs to change each values

// setup variables using object
// const firstBook = {
//   author: 'Angela Hepworth',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',

//   title: 'I Love You to the Moon and Back',
// };

// const secondBook = {
//   author: 'Richard Powers',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/71cEOVrIUmL._AC_UL200_SR200,200_.jpg',

//   title: 'Bewilderment: A Novel',
// };
// function BookList() {
//   return (
//     <section className=' booklist'>
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
//           unde porro animi ab minima ducimus dicta, dolor ut architecto.
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// method 1 to access the props
// const Book = (props) => {
//   return (
//     <article className='book'>
//       <img src={props.img} />
//       <h1>{props.title}</h1>
//       <h4> {props.author}</h4>
//     </article>
//   );
// };

// method 2 to access props
// const Book = (props) => {
//   const { img, title, author, children } = props;
//   return (
//     <article className='book'>
//       <img src={img} />
//       <h1>{title}</h1>
//       <h4> {author}</h4>
//       {children}
//     </article>
//   );
// };

// creating the booklist using arrays

// method 1 using an object book to access the item
// function BookList() {
//   return (
//     <section className=' booklist'>
//       {books.map((item) => {
//         return <Book key={item.id} book={item}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = props.book;
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4> {author}</h4>
//     </article>
//   );
// };

// // method 2 using the ... spread operator to access data
// function BookList() {
//   return (
//     <section className=' booklist'>
//       {books.map((item) => {
//         return <Book key={item.id} {...item}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4> {author}</h4>
//     </article>
//   );
// };
