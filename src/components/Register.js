import React, { useContext } from 'react';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../contexts/UserContext";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password); 

        createUser(email, password)
        .then(result => {
            const user = result.user; 
            console.log('Registered', user); 
        })
        .catch(error => console.error(error))
    }

    return (
		<div>
			<Container className="reg-form d-flex">
				<Form onSubmit={handleSubmit} className="form m-auto border border-2 p-5">
                    <Form.Text>
                        <h2 className="text-center mb-4">Register Now</h2>
                    </Form.Text>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" name="name" placeholder="Enter Name" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" name="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" placeholder="Password" />
					</Form.Group>
					<Button variant="primary" className="w-100" type="submit">
						Sign Up
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Register;