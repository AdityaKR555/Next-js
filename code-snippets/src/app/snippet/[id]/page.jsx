"use client";

import { SnippetDataContext } from "@/context/SnippetContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useContext } from "react";

function page({ params }) {
  const { snippets, setSnippets } = useContext(SnippetDataContext);

  const router = useRouter();

  const resolvedparams = use(params);
  const id = resolvedparams.id;
  const snippet = snippets.find((s) => s.id === Number(id));

const deleteSnippet = () => {
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (!confirmDelete) return;
  const updatedSnippets = snippets.filter(s => s.id !== Number(id))
  setSnippets(updatedSnippets);
  router.push("/");
}

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
                <button className="bg-red-900 py-2 px-5 rounded-xl border-2 text-white font-semibold hover:bg-amber-900" onClick={deleteSnippet}>
                  Delete
                </button>
              </div>
            </div>
            <div className="border-2 rounded-xl p-6 min-h-[50vh]">
                 <p>{snippet?.code}</p>
            </div>
            <button onClick={() => router.push("/")} className="bg-gray-900 hover:bg-gray-700 text-xl px-4 py-2 rounded-xl w-[40%] ml-auto">Go to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
