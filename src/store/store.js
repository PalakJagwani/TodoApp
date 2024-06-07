import { configureStore } from "@reduxjs/toolkit";
import TodoReducer  from "./slice";
import {saveTodosMiddleware} from './slice';

const loadTodos = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
        console.error('Could not load todos from localStorage', e);
        return undefined;
    }
};

const preloadedState = {
    todos: loadTodos() || []
};

export const store = configureStore({
    reducer : TodoReducer,

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(saveTodosMiddleware),
    
    preloadedState
})