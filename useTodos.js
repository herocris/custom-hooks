import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] remove todo',
            payload: id
        }
        dispatch(action);
    }
    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toogle todo',
            payload: id
        }
        dispatch(action);
    }

    return {
        todos,
        allTodos: todos.length,
        pendignTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
