import { useState } from 'react';

const ToggleChallenge = () => {
	const [flag, setFlag] = useState(true);
	{
		console.log(flag);
	}
	return (
		<>
			<button className="btn" onClick={() => setFlag(!flag)}>
				Click
			</button>
			{flag && <Alert />}
		</>
	);
};

const Alert = () => {
	return <div className="alert alert-danger">Hello World</div>;
};

export default ToggleChallenge;
