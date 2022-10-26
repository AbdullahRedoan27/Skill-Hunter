import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    const {courseName, id} = props.course;
    return (
        <div>
            <Link to={`/courses/${id}`} className='btn btn-wide mt-3'>{courseName}</Link>
        </div>
    );
};

export default Sidebar;