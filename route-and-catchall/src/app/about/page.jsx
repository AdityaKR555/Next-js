"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function About() {
  const [input, setInput] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    if (!input) return
    router.push(`/about/${input}`)
  }

  return (
    <div className="bg-black flex min-h-screen w-full items-center justify-center flex-col gap-4">
      <p className='text-shadow-rose-900'>Will see nested dynamic too in this one</p>

      <input
        type="text"
        placeholder="Enter anything"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-rose-900 px-2 py-1 border-2 border-rose-900 bg-transparent"
      />

      <button
        onClick={handleSubmit}
        className="bg-white text-rose-950 px-4 py-2"
      >
        Go to Route
      </button>
    </div>
  )
}

export default About