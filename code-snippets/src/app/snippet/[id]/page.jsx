"use client";

import { SnippetDataContext } from "@/context/SnippetContext";
import Link from "next/link";
import { use, useContext } from "react";

function page({ params }) {
  const { snippets } = useContext(SnippetDataContext);

  const resolvedparams = use(params);
  const id = resolvedparams.id;
  const snippet = snippets.find((s) => s.id === Number(id));
  return (
    <div>
      {snippet && (
        <div className="p-20">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex justify-between items-center p-4">
              <h1 className="text-4xl font-semibold">{snippet?.title}</h1>
              <div className="flex gap-4">
                <Link href={`/snippet/${id}/edit`}>
                  <button className="bg-blue-900 py-2 px-5 rounded-xl border-2 text-white font-semibold hover:bg-amber-900">
                    Edit
                  </button>
                </Link>
                <button className="bg-red-900 py-2 px-5 rounded-xl border-2 text-white font-semibold hover:bg-amber-900">
                  Delete
                </button>
              </div>
            </div>
            <div className="border-2 rounded-xl p-6 min-h-[50vh]">
                 <p>{snippet?.code}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
