import React, { useRef, useState } from 'react';
import {login} from './../../contexts/AuthContext'
import { Link, useHistroy } from "react-router-dom"

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistroy();



    async function handleSubmit(e) {
        e.preventDefualt();

        try {
            setError("");
            setLoading(true);

            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/dashboard'); //Admin dashboard
        } catch {
            setError("Failed to log in");
        }

        setLoading(false);
    }


    return (
        <>
            <div id="card">
                <div id="form">
                    <form >
                        
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;