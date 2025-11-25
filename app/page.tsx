"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 bg-[#ff7f50] text-white">
        <h1 className="text-2xl font-bold">Academic Peer Marketplace</h1>
        <div className="space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-white text-[#ff7f50] rounded font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-[#50d0ff] text-black rounded font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 px-8 text-center bg-gray-50">
        {/* Logo centered */}
        <div className="mb-8">
          <Image
            src="/logo.png" // put your logo in the public folder
            alt="Academic Peer Marketplace"
            width={300}     // adjust width to fit nicely
            height={450}    // keeps the tall aspect ratio
          />
        </div>

        <h2 className="text-4xl font-bold mb-6 text-[#ff7f50]">
          A Marketplace Where Academic Help is the Currency
        </h2>
        <p className="text-lg mb-8 max-w-xl text-gray-700">
          Students can earn and spend currency by sharing notes, helping each
          other with homework, and building their tutoring reputation. Learn,
          help, and grow — all in one platform.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-6 py-3 bg-[#ff7f50] text-white rounded font-semibold hover:opacity-90 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-6 py-3 bg-[#50d0ff] text-black rounded font-semibold hover:opacity-90 transition"
          >
            Learn More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-200 text-gray-700">
        &copy; {new Date().getFullYear()} Academic Peer Marketplace
      </footer>
    </div>
  );
}
