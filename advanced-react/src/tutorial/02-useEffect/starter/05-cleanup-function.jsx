import { useEffect, useState } from 'react';

const CleanupFunction = () => {
	const [toggle, setToggle] = useState(true);

	const toggleValue = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<button className="btn" onClick={toggleValue}>
				Toggle Component
			</button>

			{toggle && <RandomComponent />}
		</>
	);
};

const RandomComponent = () => {
	useEffect(() => {
		console.log('this is interesting');
		const itemId = setInterval(() => {
			console.log('hello form interval');
		}, 1000);
		return () => {
			clearInterval(itemId);
		};
	});

	return <h1>hello there</h1>;
};

export default CleanupFunction;
