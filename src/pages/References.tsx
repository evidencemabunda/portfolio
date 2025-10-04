import Header from '@/components/Header';
import References from '@/components/References';
import Footer from '@/components/Footer';

const ReferencesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <References />
      </main>
      <Footer />
    </div>
  );
};

export default ReferencesPage;