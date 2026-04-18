import Link from "next/link";

export default function() {
  return (
    <div className="bg-black flex items-center justify-center gap-4 min-h-screen flex-col">
      <h1 className="text-2xl text-rose-800 font-bold">Page Not Found!</h1>
      <p className="text-xl text-rose-700">The Page You Are Looking For Is Not Found</p>
      <Link href="/"><button className="rounded-full px-6 py-4 border-2 border-rose-800 hover:bg-rose-900 hover:text-white text-rose-800 text-xl">Go To Home</button></Link>
    </div>
  )
}
