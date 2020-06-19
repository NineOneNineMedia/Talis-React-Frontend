import React from "react";
import { Button, Form } from 'react-bootstrap';

const SignUpForm = (props) => {
    return (
        <Form className="mx-auto mt-4 text-center">
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="username" placeholder="Create Username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Submit
            </Button>
        </Form>
    );
};

export default SignUpForm;