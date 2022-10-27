import React from 'react';

const AllCourse = ({course}) => {
    console.log(course); 
    return (
        <div>
            <h2>Name: {course.title}</h2>
        </div>
    );
};

export default AllCourse;