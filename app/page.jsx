import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import IcebergSection from '@/components/IcebergSection';
import BlogSection from '@/components/BlogSection';
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <IcebergSection />
      <BlogSection />
    </main>
  );
}
