import AboutIntro from "./_components/_AboutIntro/page";
import Hero from "./_components/_Hero/page";
import Navbar from "./_components/_Navbar/page";

export default function Home() {
  return (
    <main className="bg-[#f4eeee] h-full w-full">
      <Navbar/>
      <Hero />
      <AboutIntro/>
    </main>
  );
}
