// this is a catch all route, it will match any route that starts with /services/ and has any number of segments after it

async function page({ params }) {
  const { kuchBhi } = await params;
  console.log(kuchBhi);
  return (
    <div className="bg-black flex flex-col gap-4 min-h-screen w-full items-center justify-center">
      <p>we're at</p>
      <h1 className="text-rose-900 text-6xl font-black">{`.../services/${kuchBhi.join('/')}`}</h1>
    </div>
  )
}

export default page
