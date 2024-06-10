import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : []
}


export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                todo_text : action.payload,
                completed : false
            }
            state.todos.push(todo);
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo : (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload.id ? todo.todo_text = action.payload.todo_text.todo_text : todo))
            console.log("called")
        },
        toggleComplete : (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload.id ? todo.completed = !todo.completed : todo = todo))
        }
    }
})

export const saveTodosMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('todos', JSON.stringify(state.todos));
    return result;
};

export const {addTodo, removeTodo, toggleComplete, updateTodo} = todoSlice.actions;
export default todoSlice.reducer