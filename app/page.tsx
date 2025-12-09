import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main >
      <h1 className="text-3xl font-bold text-blue-600">Welcome to My Next.js App</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />

    </main>
  );
}
