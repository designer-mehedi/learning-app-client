import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AllCourse from "./AllCourse";
import Title from "./Title";


const Courses = () => {
	const courses = useLoaderData(); 
	console.log(courses); 
    return (
		<div>
			<Container>
				<Row>
					<Col lg="3">
						<h2>Left Side</h2>
						{
							courses.map(title => <Title title={title} key={title.id}></Title>)
						}
					</Col>
					<Col lg="9">
						<h2>Main</h2>
						{
							courses.map(course => <AllCourse course={course} key={course.id}></AllCourse>)
						}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Courses;