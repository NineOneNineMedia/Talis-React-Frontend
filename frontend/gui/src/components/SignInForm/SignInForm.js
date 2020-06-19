import React from "react";
import { Button, Form } from 'react-bootstrap';


const SignInForm = () => {
    return (
        <Form className="mx-auto mt-4 text-center">
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Sign In
            </Button>
            <hr />
            Forgot password? | Create a new Talis account
        </Form>
    );
};

export default SignInForm;