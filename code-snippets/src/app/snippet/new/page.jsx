"use client";

import { SnippetDataContext } from '@/context/SnippetContext';
import { useRouter } from "next/navigation";
import React, { useContext, useState } from 'react'

function page() {

  const {snippets, setSnippets} = useContext(SnippetDataContext);

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const router = useRouter();

  const addSnippet = () => {

    if (!title || !code){
      alert("Please fill in all fields");
      return;
    }
    setSnippets((prev) => [...prev, {
      id : Date.now(),
      title,
      code
    }]);

    setTitle("");
    setCode("");

    router.push("/");

  }

  return (
    <div className='p-20'>
      <div className='flex flex-col gap-6'>
        <h3 className='text-green-900 text-4xl font-bold'>Add Code Snippet</h3>
        <div>
            <label htmlFor="title" className='text-xl'>Title: </label>
            <input type="text" id="title" name="title" className="border-2 rounded-md p-2 w-full h-15 focus:border-green-900 focus:border-4 outline-none" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="code" className='text-xl'>Code: </label>
            <textarea type="text" id="code" name="code" className="border-2 rounded-md h-120 p-2 w-full focus:border-green-900 focus:border-4 outline-none" value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <button onClick={addSnippet} className='bg-green-900 py-3 text-xl font-semibold rounded-xl hover:bg-amber-900'>New</button> 
      </div>
    </div>
  )
}

export default page
