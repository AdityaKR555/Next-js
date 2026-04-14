"use client"

import React, { createContext, useState } from 'react'


export const SnippetDataContext = createContext();

function SnippetContext({children}) {

    const [snippets, setSnippets] = useState([]);

  return (
    <div>
        <SnippetDataContext.Provider value={{ snippets, setSnippets }}>
          {children}
        </SnippetDataContext.Provider>
    </div>
  )
}

export default SnippetContext
