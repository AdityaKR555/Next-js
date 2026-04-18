import React from 'react'

export const metadata = {
  title: "Service",
}

async function page( { params } ) {
    const { service } = await params;
  return (
    <div className="bg-black flex min-h-screen w-full items-center justify-center">
      <h1 className="text-rose-900 text-6xl font-black">{service}</h1>  
    </div>
  )
}

export default page
