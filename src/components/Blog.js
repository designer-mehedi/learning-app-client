import React from 'react';
import { Col, Container, Row, Card } from "react-bootstrap";

const Blog = () => {
    return (
		<div>
			<Container className="card-container py-5">
				<Row className="mb-4">
					<Col lg="6">
						<Card className="h-100">
							<Card.Img
								variant="top"
								height="400"
								src="https://www.keycdn.com/img/support/cors.png"
							/>
							<Card.Body>
								<Card.Title>1. what is cors?</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg="6">
						<Card>
							<Card.Img
								variant="top"
								height="400"
								src="https://swoopnow.com/wp-content/uploads/2020/07/User-Authentication_-Understanding-the-Basics-Top-Tips.jpg"
							/>
							<Card.Body>
								<Card.Title>
									2. Why are you using `firebase`? What other
									options do you have to implement
									authentication?
								</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col lg="6">
						<Card>
							<Card.Img
								variant="top"
								height="400"
								src="https://i.ytimg.com/vi/99RWZsEITx4/maxresdefault.jpg"
							/>
							<Card.Body>
								<Card.Title>
									3. How does the private route work?
								</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg="6">
						<Card>
							<Card.Img
								variant="top"
								height="400"
								src="https://lh3.googleusercontent.com/csXm00pBuJvmhsXcI1XauxFGrE66sHBbWI9QyKY0lt2h55a1VaKl6F5TrlH0wBC_aijloKw9lh8a=e14-rj-sc0xffffff-w1270"
							/>
							<Card.Body>
								<Card.Title>
									4. What is Node? How does Node work?
								</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Blog;