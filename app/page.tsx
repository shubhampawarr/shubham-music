import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistIntro from "@/components/ArtistIntro";
import Discography from "@/components/Discography";
import HomeMixtapes from "@/components/HomeMixtapes";
import Connect from "@/components/Connect";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-black">
      <GrainOverlay />
      <Header />

      {/* HERO */}
      <section className="h-screen snap-start overflow-hidden">
        <Hero />
      </section>

      {/* ARTIST INTRO */}
      <section className="h-screen snap-start overflow-hidden">
        <ArtistIntro />
      </section>

      {/* DISCOGRAPHY - allowed to grow */}
      <section className="min-h-screen snap-start overflow-visible">
        <Discography />
      </section>

      {/* MIXTAPES */}
      <section className="h-screen snap-start overflow-hidden">
        <HomeMixtapes />
      </section>

      {/* CONNECT */}
      <section className="h-screen snap-start overflow-hidden">
        <Connect />
      </section>
    </main>
  );
}