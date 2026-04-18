import React from 'react'

async function page({params}) {
  const { id } = await params;
  return (
     <div className="bg-black flex flex-col gap-4 min-h-screen w-full items-center justify-center">
      <h1 className="text-rose-900 text-6xl font-black">{id}</h1>
    </div>
  )
}

export default page
