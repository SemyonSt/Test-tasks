import React, {
    useMemo, useCallback,
} from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    const login = useCallback((data) => {
        localStorage.clear();
        localStorage.setItem('userInfo', data);
        navigate('/profile')
        console.log(localStorage)
    }, [navigate]);

    const logout = useCallback(() => {
        localStorage.removeItem('userInfo')
        navigate('/')
    }, [navigate])



    const contextValue = useMemo(() => ({
        login,
        logout,
    }), [login, logout]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;