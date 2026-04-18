import Link from 'next/link';

function Services() {
  return (
    <div className="bg-black flex min-h-screen w-full items-center justify-center">
      <div className='flex flex-col text-rose-900 gap-3 text-2xl'>
        <Link href="/services/app-development">App Development</Link>
        <Link href="/services/web-development">Web Development</Link>
        <Link href="/services/ui-ux-design">UI/UX Design</Link>
        <Link href="/services/ai-ml-integration">AI/ML Integration</Link>
      </div>
    </div>
  )
}

export default Services
