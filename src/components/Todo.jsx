import { useDispatch } from "react-redux"
import {removeTodo, toggleComplete, updateTodo} from '../store/slice'
import { useState } from "react"

function Todo({todo}){
    const[updatedTodo, setUpdatedTodo] = useState("")
    const dispatch = useDispatch()
    const id = todo.id;

    return(
        <div className={`${todo.completed ? 'bg-green-300' : ''} bg-gray-400 w-[100%] md:w-[80%]  mx-auto py-2 px-1 md:px-2 text-xl text-black relative my-2`}>
            <input type="checkbox" className=" mx-2" checked = {todo.completed} onChange={() => dispatch(toggleComplete(todo))}/>
            <input type="text" className={` bg-transparent w-[70%] md:w-[80%] ${todo.completed ? 'line-through' : ''}`} defaultValue={todo.todo_text} readonly = {!todo.completed} onChange={(e) => setUpdatedTodo({...Todo,todo_text : e.target.value})} />

            <span className="mx-0 md:mx-4">
                <i className= {`fa-solid fa-pen-to-square cursor-pointer mx-3 md:mx-2 ${todo.completed ? 'invisible' : 'visible'}`} onClick={() => dispatch(updateTodo({id : id, todo_text : updatedTodo}))}></i>
                <i className={`fas fa-trash cursor-pointer`} onClick={() => dispatch(removeTodo(todo.id))}/>
            </span>
            
        </div>
    )
}

export default Todo