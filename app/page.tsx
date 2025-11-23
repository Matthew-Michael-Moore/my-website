import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Welcome to the Academic Peer Marketplace
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
          A platform where students can share notes, request help, and build their academic reputation — all in one place.
        </p>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700 md:w-[158px]"
            href="#"
          >
            Get Started
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[158px]"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
