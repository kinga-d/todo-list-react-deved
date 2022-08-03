import React from 'react';

const Todo = ({text}) => {
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn"><i className="fa-solid fa-circle-check"></i></button>
            <button className="trash-btn"><i className="fa-solid fa-trash-can"></i></button>
        </div>
        );
}

export default Todo;