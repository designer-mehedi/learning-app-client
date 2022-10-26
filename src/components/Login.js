import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Login = () => {

    const {logIn} = useContext(AuthContext); 

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		form.reset();
		console.log(email, password);

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log('Logged In User', user)
        })
        .catch(error => console.error(error))
	};

	return (
		<div>
			<Container className="reg-form d-flex">
				<Form
					onSubmit={handleSubmit}
					className="form m-auto border border-2 p-5"
				>
					<Form.Text>
						<h2 className="text-center mb-4">Login Now</h2>
					</Form.Text>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							placeholder="Enter email"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							placeholder="Password"
						/>
					</Form.Group>
					<Button variant="primary" className="w-100" type="submit">
						Login
					</Button>
                    <p>New User? <Link to="/register">Create an account</Link></p>
                   
				</Form>
			</Container>
		</div>
	);
};

export default Login;

