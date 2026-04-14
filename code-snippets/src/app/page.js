import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h3>HOME</h3>
        <div>
            <h4>Snippets</h4>
            <Link href="/snippet/new"><button>New</button></Link>
        </div>
    </div>
  );
}
