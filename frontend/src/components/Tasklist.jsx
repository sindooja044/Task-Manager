import React from 'react'

const Tasklist = ({tasks}) => {
    if(tasks.length==0) return <p>no tasks found</p>
  return (
    <div>
      <p>Tasks</p>
      {tasks.map((t)=>(
        <li key={t._id}>{t.title}</li>

      ))}
    </div>
  )
}

export default Tasklist
