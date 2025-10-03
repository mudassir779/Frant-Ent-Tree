import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('admin-user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (userData, token) => {
        setUser(userData);
        localStorage.setItem('admin-user', JSON.stringify(userData));
        localStorage.setItem('admin-token', token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('admin-user');
        localStorage.removeItem('admin-token');
    }

    return (
        <AuthContext.Provider value={({ user, login, logout })}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;