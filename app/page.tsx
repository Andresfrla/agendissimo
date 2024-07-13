import Hero from "./_components/_Hero/page";
import Navbar from "./_components/_Navbar/page";

export default function Home() {
  return (
    <main className="bg-[#f4eeee] h-screen">
      <Navbar/>
      <Hero />
    </main>
  );
}
