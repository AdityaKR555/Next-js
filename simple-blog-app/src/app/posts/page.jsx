import Loading from "@/components/Loading";
import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return <Loading />;                          //Although not useful as next is server rendered
  }

  return (
    <div className="p-5 bg-gray-700">
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className="border p-3 my-2 text-white border-white rounded">
          <Link href={`/posts/${post.id}`}>
            <h2 className="font-bold cursor-pointer">
              {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}