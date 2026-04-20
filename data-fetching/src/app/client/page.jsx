"use client";

import React, { useEffect, useState } from 'react'

function Client() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);

  return (
    <div className='flex flex-col min-h-screen items-center gap-4 justify-center'>
        <h2 className='text-4xl font-bold'>posts</h2>
      {posts.map((post) => (
        <div key={post.id} className='border border-gray-300 rounded-lg p-4 hover:-translate-y-1 transition-transform cursor-pointer'>
          <h3 className='font-bold text-lg'>{post.title}</h3>
          <p className='text-gray-600'>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Client
