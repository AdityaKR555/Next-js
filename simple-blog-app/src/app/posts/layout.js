export default function PostsLayout({ children }) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-5">
        Posts Section
      </h1>
      {children}
    </div>
  );
}