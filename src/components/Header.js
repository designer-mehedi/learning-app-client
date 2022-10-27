import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {

	const {user, logOut} = useContext(AuthContext); 
	console.log(user); 

    return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link
						to="/courses"
						className="text-decoration-none text-black fs-3 fw-bold"
					>
						Online Tutor
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto fs-5">
						<Link
							to="/courses"
							className="text-decoration-none me-5 text-black"
						>
							Courses
						</Link>
						<Link
							to="/faq"
							className="text-decoration-none me-5 text-black"
						>
							FAQ
						</Link>
						<Link
							to="/blog"
							className="text-decoration-none me-5 text-black"
						>
							Blog
						</Link>
						{user?.uid ? (
							<button className="btn btn-primary" onClick={logOut}>Log Out</button>
						) : (
							<>
								<Link
									to="/login"
									className="text-decoration-none me-5 btn btn-primary"
								>
									Login
								</Link>
								<Link
									to="/register"
									className="text-decoration-none btn btn-primary"
								>
									Sign Up
								</Link>
							</>
						)}
					</Nav>
					{user?.uid && <img className="ms-2" width={30} src={user?.photoURL} alt="" />}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;