import { useState } from 'react'
import './App.css'

const App = () => {
  const [input,setInput] = useState("");
  const [tasks, setTask] = useState([]);
  
  const addTask = () =>{
    if(input===""){
      return;
    }
    const newTask = { text: input, completed:false  };
    setTask([...tasks,newTask]);
    setInput("")
  } 
  console.log(tasks);

  const deleteTask = (char)=>{

    setTimeout(() => {
      setTask(tasks.filter(el=>el.text!==char))
    }, 100);
    
  }


  const strikeThrough = (taskToStrike)=>{
    setTask((prevTasks) =>
    prevTasks.map((task) =>
      task == taskToStrike
        ? { ...task, completed: !task.completed }
        : task
    ))
    
  }


  return(
    <>
    <div className='Container'>

    <center><h1>ToDO List</h1></center>
      <div className=''>
        <input type="text"  value={input} onChange={(val)=>setInput(val.target.value)}  className="input" placeholder="Write a message"/>
        <button className='button' onClick={addTask}>Add Task</button>
      </div>
      {tasks.length==0? 

        (<div className='display' id="text2">No tasks Yet</div>):

        (tasks.map((task)=>(
          <div className='display' key={task.text}>

              
                <input type="checkbox" checked={task.completed} onChange={() => strikeThrough(task)} />
                

              <p id='text1' className={task.completed ? "strike" : ""}>{task.text}</p>


              <button className='btn' onClick={()=>deleteTask(task.text)}>
                Delete </button>

          </div>
        )))
        }
    </div>
    </>
  )
}

export default App