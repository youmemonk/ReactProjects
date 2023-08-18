import { useState } from 'react';

const UseStateBasics = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
		// setCount('pants');
	};
	console.log(count);

	return (
		<>
			<h2>You clicked {count} times</h2>
			<button type="button" className="btn" onClick={handleClick}>
				Click here
			</button>
		</>
	);
};

export default UseStateBasics;
