import React from 'react';
import { Link } from "react-router-dom";

const Title = ({title}) => {
    return (
        <div className="mb-3 border border-2 rounded px-4 py-2">
            <Link className="text-decoration-none">{title.title}</Link>
        </div>
    );
};

export default Title;