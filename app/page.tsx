import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authoptions } from "./api/auth/[...nextauth]/route";
import coffee from '../public/images/coffee.jpeg'

export default async function Home() {
  const session = await getServerSession(authoptions);
  return (
    <main className="relative h-screen">
      <h1 className="text-3xl font-bold text-blue-600 font-poppins">Welcome {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />

      <Image src={coffee} alt="Coffee" />
      <Image src="https://logo.svgcdn.com/logos/react.png" alt="coffee" fill className="object-contain" sizes="(max-width : 768px) 100vw, (max-width:1200px) 50vw, 33vw" quality={100} priority />

    </main>
  );
}
