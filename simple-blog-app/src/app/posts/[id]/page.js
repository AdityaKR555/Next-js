async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.json();
}

export default async function PostPage({ params }) {
  // const post = await getPost(params.id);
  const { id } = await params;   
  const post = await getPost(id);

  return (
    <div className="p-5 text-center bg-gray-700 text-white">
      <h1 className="text-xl font-bold my-2">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}