import React from 'react'

async function Server() {

   const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
   const todos = await response.json();
   console.log(todos);

  return (
     <div className='flex flex-col min-h-screen items-center gap-4 justify-center'>
        <h2 className='text-4xl font-bold'>posts</h2>
      {todos.map(({id, title, completed}) => (
        <div key={id} className='flex gap-4  border border-gray-300 rounded-lg p-4 hover:-translate-y-1 transition-transform cursor-pointer'>
          <input type="checkbox" checked={completed} readOnly />
          <h3 className='font-bold text-lg'>{title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Server
