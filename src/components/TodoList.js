import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // const Todo = ({ id, text }) => (
    //     <p key={id}>{text}</p>
    // );

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        setTodos((prevTodos) => [...prevTodos, todo]);
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    return(
        <div className="container">
            <div className="form">
                <h1>What's the plan for today?</h1>
                <TodoForm onSubmit={addTodo} />
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
            </div>
        </div>
    );
}

export default TodoList;