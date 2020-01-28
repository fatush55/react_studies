import React from "react";

import './todo-list.css'

import TodoListItems from "../todo-list-items/todo-list-items";

const TodoList = ({data, onDelete, onDone, onImportant}) => {
    const elements = data.map((item) => {
        const {id, ...todoItem} = item;

        return (
            <li key={id} className='todo-list'>
                <TodoListItems
                    {...todoItem}
                    onDelete={()=> onDelete(id)}
                    onDone={() => onDone(id)}
                    onImportant={() => onImportant(id)}
                />
            </li>
        );
    });

    return (
        <ul className='todo-list-all'>
            {elements}
        </ul>
    );
};

export default TodoList;