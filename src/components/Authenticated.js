import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase/config'

const Authenticated = (props) => {

    const [loggedIn, setLoggedIn] = useState(null);

    auth.onAuthStateChanged((user) => {
        if (user) {
            //user logged in 
            setLoggedIn(true);
        } else {
            //user signout
            setLoggedIn(false);
        }
    });

    if (props.nonAuthenticated) {
        if (loggedIn == null) {
            return "Loading....";
        } else if (!loggedIn) {
            return props.children;
        } else if (loggedIn) {
            return <Redirect to="/dashboard" />;
        }
    } else {
        if (loggedIn == null) {
            return "Loading....";
        } else if (loggedIn) {
            return props.children;
        } else if (!loggedIn) {
            return <Redirect to="/" />;
        }
    }
};

export default Authenticated;
