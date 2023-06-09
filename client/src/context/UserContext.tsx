import { createContext, useState, ReactNode } from "react";

type UserProviderProps = {
	children: ReactNode;
};
const UserContext = createContext({});

const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState(null);

	const login = () => {
		console.log("njims");
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserProvider, UserContext };
