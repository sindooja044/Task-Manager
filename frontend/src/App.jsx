import React, { useState } from 'react'

import Taskform from './components/Taskform'
import Tasklist from './components/taskList'

const [tasks,setTasks]=useState([]);

const App = () => {
   
  const addTask=async (title) => {
    const res=await fetch("http://localhost:5000/api/tasks", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({title}),
    });
    const data=await res.json();
    setTasks((prev)=>[data,...prev]);
  };
  return (
    <div>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks}/>
    </div>
  )
}

export default App;