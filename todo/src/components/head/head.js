import React from "react";

import './head.css';

const Header = ({todo,done}) => {
    return (
        <div className='head-todo'>
            <h1>My Todo List</h1>
            <h6>{todo} more to do, done {done}</h6>
        </div>
    )
};

export default Header