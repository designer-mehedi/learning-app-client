import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link
						to="/home"
						className="text-decoration-none text-black fs-3 fw-bold"
					>
						Online Tutor
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto fs-5">
						<Link
							to="/home"
							className="text-decoration-none me-5 text-black"
						>
							Home
						</Link>
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
							className="text-decoration-none text-black"
						>
							Blog
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;