import Head from "next/head";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-theme-1-4 -z-50 relative flex min-h-screen flex-col items-center justify-start">
      <Navbar />
      <About />
    </main>
  );
}
