import React from 'react';
import { Link } from "react-router-dom";

const Title = ({title}) => {
    const {_id} = title;

    return (
        <div className="mb-3 border border-2 rounded px-4 py-2">
            <Link to={`/course/${_id}`} className="text-decoration-none">{title.title}</Link>
        </div>
    );
};

export default Title;