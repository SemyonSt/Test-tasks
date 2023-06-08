import React, {
    useMemo, useCallback, useState, 
    // useEffect
} from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";


// const useLogoutEffect = () => {
//     const navigate = useNavigate()

//     useEffect(() => {
//         navigate('/');
//     }, [navigate]);
// };

const AuthProvider = ({ children }) => {
    const [logedIn, setLogedIn] = useState(false)
    const navigate = useNavigate()

    const logout = useCallback(() => {
        setLogedIn(false);
        // eslint-disable-next-line react-hooks/rules-of-hooks
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