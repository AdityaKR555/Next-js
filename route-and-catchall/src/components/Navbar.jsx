import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-rose-950 flex items-center justify-around px-32 py-8'>
      <Link href="/" className='text-2xl font-bold text-white hover:text-rose-700'>Home</Link>
        <Link href="/about" className='text-2xl font-bold text-white hover:text-rose-700'>Dynamic 1</Link>
        <Link href="/services" className='text-2xl font-bold text-white hover:text-rose-700'>Dynamic 2</Link>
    </div>
  )
}
     
export default Navbar
