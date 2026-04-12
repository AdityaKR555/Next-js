import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-700 w-full h-screen overflow-hidden flex flex-col items-center justify-center gap-5">
        <p className="text-center max-w-xl text-white text-lg">
          Welcome to our blog — a place where we share useful insights, ideas,
          and knowledge on technology, development, and learning. Explore posts,
          improve your skills, and stay updated with the latest trends.
        </p>
        <Link href="/posts">
          <button className="text-white font-bold px-8 py-4  rounded-4xl bg-gray-900 hover:bg-gray-800">
            View Posts
          </button>
        </Link>
      </div>
    </>
  );
}
