import React, { Component } from 'react';


const Todolist = ({thetodos, deleteTodo}) => {

    const todoList=thetodos.length ? (
       thetodos.map( todo => {
           return (
                <div className="list-group-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <div className="list-group-item">
            <p>You have no to do's left :)</p>
        </div>
    )
    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todolist;
