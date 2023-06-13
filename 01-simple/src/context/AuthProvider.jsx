import React, {
    useMemo, useCallback, useState, 
} from 'react';

import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [logedIn, setLogedIn] = useState(false)
    const navigate = useNavigate()

    const logout = useCallback(() => {
        setLogedIn(false);
        navigate('/')
    }, [navigate])

    const login = useCallback((data) => {
        setLogedIn(true)
        navigate('/profile')
        
    }, [navigate]);

    const contextValue = useMemo(() => ({
        logedIn,
        login,
        logout,
    }), [logedIn, login, logout]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;