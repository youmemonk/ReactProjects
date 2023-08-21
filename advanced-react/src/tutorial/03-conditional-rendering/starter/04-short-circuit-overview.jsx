import { useState } from 'react';

const ShortCircuitOverview = () => {
	const [text, setText] = useState(''); //falsy
	const [name, setName] = useState('testName'); //truthy

	return (
		<>
			<h2>Falsy OR: {text || 'hello world'}</h2>
			<h2>Falsy AND: {text && 'hello world'}</h2>
			<h2>Truthy OR: {text || 'hello world'}</h2>
			<h2>Truthy AND: {text && 'hello world'}</h2>
		</>
	);
};
export default ShortCircuitOverview;
