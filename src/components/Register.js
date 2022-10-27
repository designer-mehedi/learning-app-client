import React, { useContext } from 'react';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { FcGoogle } from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

const Register = () => {

    const { createUser, signInWithGoogle, signInWithGithub } =
		useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
		const name = form.name.value; 
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(name, email, password); 

        createUser(email, password)
        .then(result => {
            const user = result.user; 
            console.log('Registered', user); 
        })
        .catch(error => console.error(error));
    }

    const handleGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user); 
        })
        .catch(error => console.error(error)); 
    }

    const handleGithub = () => {
        signInWithGithub()
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.error(error)); 
    }

    return (
		<div>
			<Container className="reg-form d-flex py-5">
				<Form
					onSubmit={handleSubmit}
					className="form m-auto border border-2 p-5"
				>
					<Form.Text>
						<h2 className="text-center mb-4">Register Now</h2>
					</Form.Text>
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>Full Name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Enter Name"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPhotoURL">
						<Form.Label>Photo URL</Form.Label>
						<Form.Control
							type="text"
							name="photoURL"
							placeholder="Enter PhotoURL"
						/>
					</Form.Group>
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
						Sign Up
					</Button>
					<p>
						Already have an account? <Link to="/login">Login</Link>
					</p>
					<button
						onClick={handleGoogle}
						className="btn btn-md w-100 btn-outline-primary mb-3"
					>
						<span className="fs-4 me-2">
							<FcGoogle />
						</span>
						Login With Google
					</button>
					<button
						onClick={handleGithub}
						className="btn btn-md w-100 btn-outline-info text-black"
					>
						<span className="fs-4 me-2">
							<FaGithub />
						</span>
						Login With Github
					</button>
				</Form>
			</Container>
		</div>
	);
};

export default Register;