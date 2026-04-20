// async function page() {

//    const res1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
//    const data1 = await res1.json();
//    const res2 = await fetch("https://procodrr.vercel.app/?sleep=3000");
//    const data2 = await res2.json();

//   return (
//     <div>
//       {data1.message}
//       <br />
//       {data2.message}
//     </div>
//   )
// }

// export default page

// Isme parallelly fetch hoga, so fast hoga dono response aane me, dono 2-3 seconds me aajayenge, total time 3 seconds ke aas paas lagega, sequentially karne me 5 seconds lagte

// import SlowRes1 from "@/components/SlowRes1"
// import SlowRes2 from "@/components/SlowRes2"
// import { Suspense } from "react"

// function page() {
//   return (
//     <div>
//       <Suspense fallback={<div>Response1 Loading...</div>}>
//         <SlowRes1 />
//       </Suspense>
//       <Suspense fallback={<div>Response2 Loading...</div>}>
//         <SlowRes2 />
//       </Suspense>
//     </div>
//   )
// }

// export default page

//One more way to fetch sequentially - promise.all

async function page() {

//    const [res1, res2] = await Promise.all(["https://procodrr.vercel.app/?sleep=2000", "https://procodrr.vercel.app/?sleep=3000"]);

//    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

async function fetchData(url) {
  const res = await fetch(url);
  return res.json();
}

const apis = ["https://procodrr.vercel.app/?sleep=2000", "https://procodrr.vercel.app/?sleep=3000"];

const [data1, data2] = await Promise.all(apis.map( api => fetchData(api) ));

   return (
    <div>
      {data1.message}
      <br />
      {data2.message}
    </div>
  )
}

export default page
