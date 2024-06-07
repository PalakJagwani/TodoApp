import Todo from './Todo'
import {useSelector} from 'react-redux'

function Todos(){
    const Todos = useSelector((state) => state.todos);
    return(
        <div className=" mt-10 text-slate-400">
            <h2 className=" text-center mb-5">Your Todos..</h2>
            {Todos.map((todo) => (
                <Todo key={todo.id} todo = {todo}/>
            ))}
        </div>
    )
}

export default Todos