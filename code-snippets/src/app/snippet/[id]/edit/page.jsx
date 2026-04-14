"use client";

import { SnippetDataContext } from "@/context/SnippetContext";
import { use, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const { snippets, setSnippets } = useContext(SnippetDataContext);
  const router = useRouter();

  const resolvedparams = use(params);
  const id = resolvedparams.id;

  const snippet = snippets.find((s) => s.id === Number(id));

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");


  useEffect(() => {
    if (snippet) {
      setTitle(snippet.title);
      setCode(snippet.code);
    }
  }, [snippet]);


  const updateSnippet = () => {
    if (!title || !code){
         alert("Title and Code are required!");
         return;
    }
         

    const updatedSnippets = snippets.map((snippet) =>
      snippet.id === Number(id)
        ? { ...snippet, title, code }
        : snippet
    );

    setSnippets(updatedSnippets);

    router.push(`/snippet/${id}`); // back to detail page
  };

  return (
    <div className="p-20">
      <h1 className="text-4xl font-semibold mb-6">Edit Snippet</h1>

      <div className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-md focus:border-green-900 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <textarea
          className="border p-3 rounded-md h-52 focus:border-green-900 outline-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code"
        />

        <button
          onClick={updateSnippet}
          className="bg-green-900 text-white py-2 px-5 rounded-xl hover:bg-green-700"
        >
          Update
        </button>
      </div>
    </div>
  );
}