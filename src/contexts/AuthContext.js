import React, {useContext, useState, useEffect} from 'react';
import {auth} from './../firebase/config'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function login(email, password){
        return auth.signInwithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut;
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        resetPassword,
    }


    return (  
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;