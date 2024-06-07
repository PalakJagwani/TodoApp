import { useState }from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../store/slice'

function InputForm(){
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const todoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return(
        <form className=" mx-auto " onSubmit={todoHandler}>
            <input type="text" placeholder="Write here.." className="w-[70vw] md:w-[40vw] mt-10 h-10 px-3 text-xl text-black rounded-sm" value = {input} onChange = {(e) => setInput(e.target.value)}/>
            <button className="w-[25vw] md:w-[10vw] mt-10 h-10 px-3 text-xl text-black bg-gray-400 ml-1 rounded-sm">Add</button>
        </form>
    )
}

export default InputForm    