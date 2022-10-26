import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Courses = () => {
    return (
		<div>
			<Container>
				<Row>
					<Col lg="3">
						<h2>Left Side</h2>
						<p>Courses Title</p>
					</Col>
					<Col lg="9">
						<h2>Main</h2>
						<p>Course Details</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Courses;