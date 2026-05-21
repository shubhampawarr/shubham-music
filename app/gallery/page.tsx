import Header from '@/components/Header';
import GrainOverlay from '@/components/GrainOverlay';
import Gallery from '@/components/Gallery';
import PageFooter from '@/components/PageFooter';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GrainOverlay />
      <Header />

      <div className="pt-24">
        <Gallery />
      </div>

      <PageFooter />
    </main>
  );
}