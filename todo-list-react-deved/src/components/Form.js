import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => { //props 

    const inputTexthandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fa-solid fa-calendar-plus"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">Wszystkie</option>
                    <option value="completed">Gotowe</option>
                    <option value="uncompleted">Do zrobienia</option>
                </select>
            </div>
        </form>
        );
}

export default Form;
