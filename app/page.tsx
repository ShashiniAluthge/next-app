import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authoptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authoptions);
  return (
    <main >
      <h1 className="text-3xl font-bold text-blue-600">Welcome {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />

    </main>
  );
}
