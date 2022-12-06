import React from 'react';
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllCourse = ({course}) => {
    const {img, title, _id} = course; 
    console.log(course); 
    return (
		<Col lg="4" className="mb-4">
			<Card>
				<Card.Img height="180" variant="top" src={img} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Link to={`/course/${_id}`}>
						<Button variant="primary" className="w-100">Details</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default AllCourse;