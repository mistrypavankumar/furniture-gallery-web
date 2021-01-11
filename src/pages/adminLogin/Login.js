import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap"

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
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Log In
            </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Login;