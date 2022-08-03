import React from 'react';

const Todo = ({ text, todo, setTodos, todos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
};
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn"><i className="fa-solid fa-circle-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fa-solid fa-trash-can"></i></button>
        </div>
        );
}

export default Todo;