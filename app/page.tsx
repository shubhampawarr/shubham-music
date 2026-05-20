import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistIntro from "@/components/ArtistIntro";
import Discography from "@/components/Discography";
import Mixtapes from "@/components/Mixtapes";
import Connect from "@/components/Connect";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white text-black">
      <GrainOverlay />
      <Header />

      <section
        id="home"
        className="min-h-screen snap-start snap-always overflow-hidden"
      >
        <Hero />
      </section>

      <section
        id="music"
        className="min-h-screen snap-start snap-always overflow-hidden"
      >
        <ArtistIntro />
      </section>

      <section
        id="discography"
        className="min-h-screen snap-start snap-always overflow-hidden"
      >
        <Discography />
      </section>

      <section
        id="mixtapes"
        className="min-h-screen snap-start snap-always overflow-hidden"
      >
        <Mixtapes />
      </section>

      <section
        id="connect"
        className="min-h-screen snap-start snap-always overflow-hidden"
      >
        <Connect />
      </section>
    </main>
  );
}