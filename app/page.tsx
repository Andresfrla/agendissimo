import AboutIntro from "./_components/_AboutIntro/page";
import FollowMeOnIg from "./_components/_FollowMeOnIg/page";
import Footer from "./_components/_Footer/page";
import Hero from "./_components/_Hero/page";
import Navbar from "./_components/_Navbar/page";
import SocialContent from "./_components/_SocialContent/page";
import TestimonialsIntro from "./_components/_TestimonialsIntro/page";

export default function Home() {
  return (
    <main className="bg-[#f4eeee] h-full w-full">
      <Navbar/>
      <Hero />
      <AboutIntro/>
      <SocialContent/>
      <FollowMeOnIg />
      <TestimonialsIntro/>
      <Footer />
    </main>
  );
}
