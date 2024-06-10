import InputForm from "./components/InputForm"
import Todos from "./components/Todos"

function App() {
  return (
    <div className=' text-slate-100 grid place-content-center mt-24'>
      <h1 className=" text-3xl font-serif font-semibold text-center">Add your todos here...</h1>
      <InputForm/>
      <Todos/>
    </div>
  )
}

export default App
