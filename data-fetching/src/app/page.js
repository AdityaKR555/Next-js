import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>We'll See Data Fetching from both Client and Server in this one, use following Links to check both the ways.</h2>
      <Link href="/client"><button>Client Side Data Fetching</button></Link>
      <br />
      <Link href="/server"><button>Server Side Data Fetching</button></Link>
    </div>
  );
}
