import { createContext, useEffect, useState, ReactNode } from "react";

type UserProviderProps = {
	children: ReactNode;
};

export const UserContext = createContext({});

const UserProvider = ({ children }: UserProviderProps) => {
	const [currentUser, setCurrentuser] = useState(
		JSON.parse(localStorage.getItem("user") || "false") || null
	);
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	const login = () => {
		console.log("njimoke");
	};
	const logout = () => {
		console.log("njimoke");
	};
	return (
		<UserContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
