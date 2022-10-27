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
			<Container className="course-container py-5">
				<Row>
					<Col lg="3">
						<h2 className="mb-3">Courses</h2>
						{courses.map((title) => (
							<Title title={title} key={title.id}></Title>
						))}
					</Col>
					<Col lg="9">
						<h2>Main</h2>
						<Row>
							{courses.map((course) => (
								<AllCourse
									course={course}
									key={course.id}
								></AllCourse>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Courses;