import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import './App.css';


const addToTasks = (e) =>{
    e.preventDefault()

    if (addTasks !== "" && addTasks !== " "){
        setTasks([
            ...tasks, {
            id: Date.now(),
                text: addTask,
            }
            ]


        )
    }
}


function App() {
    const [tasks, setTasks] = useState([])
    const [addTask,setAddTask]=useState("")
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='todo d-flex flex-column align-items-center'>
        <h2 className='mt-5'>Todo App</h2>
          <div>

        <form>
            <input type="text" placeholder='Add Your Task' onChange={(e) => setAddTask(e.target.value)} value={addTask}/>
            <button type='submit' onClick={addToTasks}>Add</button>
            <ToastContainer />
        </form>
          </div>

      </div>
    </div>
  );
}

export default App;
