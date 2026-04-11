import React from 'react'

const Tasklist = ({tasks}) => {
   
  return (
    <div>
      <p>Tasks</p>
      <ul>
      {tasks.map((t,index)=>(
        <li key={t._id || index}>{t.title}</li>

      ))}
      </ul>
    </div>
  )
}

export default Tasklist
