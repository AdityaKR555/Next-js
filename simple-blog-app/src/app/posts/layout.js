export default function PostsLayout({ children }) {
  return (
    <div className="bg-gray-700 min-h-screen">
      <h1 className="text-center text-2xl font-bold mt-5">
        Posts Section
      </h1>
      {children}
    </div>
  );
}