import Link from 'next/link';
import { notFound } from 'next/navigation';

async function page({ params }) {
  const { id } = await params;  
  if(isNaN(Number(id))){
    notFound();
  }
  return (
      <div className="bg-black flex flex-col gap-4 min-h-screen w-full items-center justify-center">
      <h1 className="text-rose-900 text-6xl font-black">{id}</h1>
      <Link href={`/about/${id}/more`} className='text-2xl font-bold text-white hover:text-rose-700'>Go Nested</Link>
    </div>
  )
}

export default page
