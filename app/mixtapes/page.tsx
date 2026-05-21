import Header from '@/components/Header';
import GrainOverlay from '@/components/GrainOverlay';
import Mixtapes from '@/components/Mixtapes';
import PageFooter from '@/components/PageFooter';

export default function MixtapesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <GrainOverlay />
      <Header />

      <Mixtapes />

      <PageFooter />
    </main>
  );
}