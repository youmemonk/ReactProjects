import { useState } from 'react';

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const login = (user) => {
		setUser({ name: 'John' });
	};
	const logout = (user) => {
		setUser(null);
	};
	return (
		<>
			{/* {user ? (
				<div>
					<h4>hello there, {user.name}</h4>
					<button className="btn" onClick={logout}>
						Logout
					</button>
				</div>
			) : (
				<div>
					<h4>Please Login</h4>
					<button className="btn" onClick={login}>
						Login
					</button>
				</div>
			)} */}

			<h4>{user ? `hello there, ${user.name}` : `Please Login`}</h4>
			<button className="btn" onClick={user ? logout : login}>
				{user ? `logout` : `login`}
			</button>
		</>
	);
};

export default UserChallenge;
