import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length 
    ? (
        todos.map(todo => {
            return (
            <div key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
            </div>
            )
        })
    ) : (
        <p> you have nothing left todo!</p>
    );

    return (
        <div>
            {todoList}
        </div>
    )
}
export default Todos;