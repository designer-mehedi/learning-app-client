import React from 'react';
import { Link } from "react-router-dom";

const Title = ({title}) => {
    return (
        <div>
            <Link>{title.title}</Link>
        </div>
    );
};

export default Title;