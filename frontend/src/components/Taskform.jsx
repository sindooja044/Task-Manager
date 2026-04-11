import React from 'react'
import { useState } from 'react'

const Taskform = ({addTask}) => {
    const [title,setTitle]=useState("")
    const handleSubmit= async (e)=>{
        e.preventDefault();
         if (!title.trim()) return; 
        await addTask(title)
        setTitle("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Taskform
