import { useState } from 'react';

const UseStateObject = () => {
	// const [name, setName] = useState('Peter');
	// const [age, setAge] = useState(24);
	// const [hobby, setHobby] = useState('reads books');
	const initialSchema = { name: 'Peter', age: 24, hobby: 'reads books' };
	const [person, setPerson] = useState(initialSchema);

	console.log(person);

	const displayPerson = () => {
		// setName('John');
		// setAge(32);
		// setHobby('watches cricket');
		const newSchema = { name: 'John', age: 32, hobby: 'watches cricket' };
		setPerson(newSchema);
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>Enjoys: {person.hobby}</h3>

			<button type="button" className="btn" onClick={displayPerson}>
				show john
			</button>
		</>
	);
};

export default UseStateObject;
