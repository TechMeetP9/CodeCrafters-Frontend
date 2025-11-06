    /* eslint-disable react-refresh/only-export-components */

    import { createContext, useState, useEffect, useContext } from "react";
    import { getUserByToken } from "../api/auth";

    export const UserContext = createContext(null);

    export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
        getUserByToken(token)
            .then((user) => setCurrentUser(user))
            .catch(() => setCurrentUser(null));
        }
    }, []);

    const loginUser = (user) => setCurrentUser(user);

    const logoutUser = () => {
        setCurrentUser(null);
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider value={{ currentUser, loginUser, logoutUser }}>
        {children}
        </UserContext.Provider>
    );
    };

    export const useUser = () => useContext(UserContext);
