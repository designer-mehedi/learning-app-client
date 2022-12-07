import React from 'react';
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const {title, img, } = useLoaderData();
    
    return (
        <div className="container">
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default CourseDetails;