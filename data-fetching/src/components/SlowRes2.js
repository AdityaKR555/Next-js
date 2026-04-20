import React from 'react'

async function SlowRes2() {
   const res1 = await fetch("https://procodrr.vercel.app/?sleep=3000");
   const data1 = await res1.json();
  return (
    <div>
      {data1.message}
    </div>
  )
}

export default SlowRes2
