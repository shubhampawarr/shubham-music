import Header from '@/components/Header';
import GrainOverlay from '@/components/GrainOverlay';
import MusicArchive from '@/components/MusicArchive';
import PageFooter from '@/components/PageFooter';

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GrainOverlay />
      <Header />
      <MusicArchive />
      <PageFooter />
    </main>
  );
}