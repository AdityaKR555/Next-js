import React from 'react'

function Loading() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='border-4 border-cyan-700 rounded-4xl border-t-4 border-t-transparent w-10 h-10  animate-spin mx-auto mt-5'></div>
    </div>
  )
}

export default Loading
