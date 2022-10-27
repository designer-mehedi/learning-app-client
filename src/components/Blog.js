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
									Cross-Origin Resource Sharing (CORS) is an
									HTTP-header based mechanism that allows a
									server to indicate any origins (domain,
									scheme, or port) other than its own from
									which a browser should permit loading
									resources. CORS also relies on a mechanism
									by which browsers make a "preflight" request
									to the server hosting the cross-origin
									resource, in order to check that the server
									will permit the actual request. In that
									preflight, the browser sends headers that
									indicate the HTTP method and headers that
									will be used in the actual request.
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
									The Firebase Realtime Database lets you
									build rich, collaborative applications by
									allowing secure access to the database
									directly from client-side code. Data is
									persisted locally, and even while offline,
									realtime events continue to fire, giving the
									end user a responsive experience. Auth0,
									MongoDB, Passport, Okta, and Firebase are
									the most popular alternatives and
									competitors to Firebase Authentication.
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
									Private Routes in React Router (also called
									Protected Routes) require a user being
									authorized to visit a route (read: page). So
									if a user is not authorized for a specific
									page, they cannot access it. The most common
									example is authentication in a React
									application where a user can only access the
									protected pages when they are authorized
									(which means in this case being
									authenticated). Authorization goes beyond
									authentication though. For example, a user
									can also have roles and permissions which
									give a user access to specific areas of the
									application.
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
									Node.js is an open-source backend javascript
									runtime environment. It is a used as backend
									service where javascript works on the
									server-side of the application. This way
									javascript is used on both frontend and
									backend. Node.js runs on chrome v8 engine
									which converts javascript code into machine
									code, it is highly scalable, lightweight,
									fast, and data-intensive. Node.js accepts
									the request from the clients and sends the
									response, while working with the request
									node.js handles them with a single thread.
									To operate I/O operations or requests
									node.js use the concept of threads. Thread
									is a sequence of instructions that the
									server needs to perform. It runs parallel on
									the server to provide the information to
									multiple clients. Node.js is an event loop
									single-threaded language. It can handle
									concurrent requests with a single thread
									without blocking it for one request.
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