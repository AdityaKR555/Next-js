"use client";

import { SnippetDataContext } from "@/context/SnippetContext";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {

  const { snippets } = useContext(SnippetDataContext);

  return (
    <div className="p-20">
        <h3 className="m-4 text-5xl font-bold italic">HOME</h3>
        <div className="mx-4 my-10 rounded-xl border-2 p-6 flex justify-between items-center">
            <h4 className="text-2xl font-semibold italic">Snippets</h4>
            <Link href="/snippet/new"><button className="bg-blue-900 py-2 px-5 rounded-xl border-2 text-white font-semibold hover:bg-amber-900">New</button></Link>
        </div>
        {
          snippets.length > 0 ? (
            snippets.map((snippet) => (
              <div key={snippet.id} className="rounded-xl mx-4 border-2 px-6 py-3 flex justify-between items-center mb-4">
                <p className="text-xl">{snippet.title}</p>
                <Link href={`/snippet/${snippet.id}`}><button className="bg-rose-900 border-2 rounded-xl py-2 px-4 font-semibold text-m hover:bg-rose-600 text-white">View</button></Link>
              </div>
            ))
          ) : (<p className="text-center">No snippets yet</p>)
        }
    </div>
  );
}
