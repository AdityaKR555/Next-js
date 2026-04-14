"use client"

import React, { createContext, useState, useEffect } from 'react'


export const SnippetDataContext = createContext();

function SnippetContext({children}) {

    const [snippets, setSnippets] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const storedSnippets = localStorage.getItem("snippets");
      if (storedSnippets) {
        setSnippets(JSON.parse(storedSnippets));
      }
      setIsLoaded(true);
    }, []);

    useEffect(() => {
      if (isLoaded) {
        localStorage.setItem("snippets", JSON.stringify(snippets));
      }
    }, [snippets, isLoaded]);

  return (
    <div>
        <SnippetDataContext.Provider value={{ snippets, setSnippets }}>
          {children}
        </SnippetDataContext.Provider>
    </div>
  )
}

export default SnippetContext
