import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center gap-4 items-center flex-col">
      <h2 className="font-semibold text-2xl">We'll See Data Fetching from both Client and Server in this one, use following Links to check both the ways.</h2>
      <Link href="/client"><button className="p-3 rounded-2xl font-semibold border-2 border-white hover:bg-white hover:text-black cursor-pointer">1) Client Side Data Fetching</button></Link>
      <Link href="/server"><button className="p-3 rounded-2xl font-semibold border-2 border-white hover:bg-white hover:text-black cursor-pointer">2) Server Side Data Fetching</button></Link>
    </div>
  );
}
