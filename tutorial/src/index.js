import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

// function Greeting() {
// 	return React.createElement('h2', {}, 'hello world');
// }
// function Greeting() {
// 	return (
// 		<React.Fragment>
// 			<h3>Hello World</h3>
// 			<ul>
// 				<li>
// 					<a href="#">hello world</a>
// 				</li>
// 			</ul>
// 			<Person />
// 			<Message />
// 		</React.Fragment>
// 	);
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
// 	return <p>This is my message</p>;
// };

// const title = 'Quietly Hostile : Essays';
// const author = 'Samantha Irby';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/51XG5Qz8XNL._AC_SX368_.jpg';

// const firstBook = {
// 	author: 'Samantha Irby',
// 	title: 'Quietly Hostile : Essays',
// 	img: 'https://images-na.ssl-images-amazon.com/images/I/51XG5Qz8XNL._AC_SX368_.jpg',
// };
// const secondBook = {
// 	author: 'Brendan Slocumb',
// 	title: 'Symphony of Secrets',
// 	img: 'https://images-na.ssl-images-amazon.com/images/I/51JQU3jEaVL._AC_SX368_.jpg',
// };

const names = ['john', 'men', 'testing'];
const newNames = names.map((name) => {
	return <h2>{name}</h2>;
});

const EventExamples = () => {
	const handleFormInput = (e) => {
		console.log(e.target);
		console.log(e.target.name);
		console.log(e.target.value);
		console.log('handle form input');
	};
	const handleButtonClick = () => {
		alert('handle button click');
	};
	const handleFormSubmission = (e) => {
		e.preventDefault();
		console.log('form submit');
	};
	return (
		<form onSubmit={handleFormSubmission}>
			<h2>Typical Form</h2>
			<input type="text" name="example" id="" style={{ margin: '1rem 0' }} onChange={handleFormInput} />
			<button onClick={handleButtonClick}>Click Me!</button>
		</form>
	);
};
const BookList = () => {
	// const someValue = 'shakeAndBake';
	// const displayValue = () => {
	// 	console.log(someValue);
	// };
	const getBook = (id) => {
		const book = books.find((book) => book.id === id);
		console.log(book);
	};
	return (
		// <section className="booklist">
		// 	<Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
		// 		<p>
		// 			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum culpa corporis, eum rem quas accusantium earum
		// 			animi eveniet provident harum?
		// 		</p>
		// 		<button>Click Me!</button>
		// 	</Book>
		// 	<Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
		// </section>
		<section className="booklist">
			{/* <EventExamples /> */}
			{books.map((book, index) => {
				const { img, author, title, id } = book;
				{
					/* return <Book {...book} key={id} displayValue={displayValue}/>; */
				}
				return <Book {...book} key={id} getBook={getBook} index={index} />;
			})}
		</section>
	);
};

// const Book = (props) => {
// 	const { author, title, img, children, getBook, id } = props;
// 	const getSingleBook = () => getBook(id);
// 	// const displayTitle = () => {
// 	// 	console.log(title);
// 	// };
// 	return (
// 		<article className="book">
// 			<img src={img} alt={title} />
// 			<h2>{title}</h2>
// 			<h4>{author}</h4>
// 			{/* {children} */}
// 			{/* <button onClick={displayTitle}>Display Title</button> */}
// 			{/* <button onClick={displayValue}>Click Me</button> */}
// 			{/* <button onClick={() => getBook(id)}>click me</button> */}
// 			<button onClick={getSingleBook}>click me</button>
// 		</article>
// 	);
// };

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<BookList />);
