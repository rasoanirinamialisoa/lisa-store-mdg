
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterBanner from '@/components/home/NewsletterBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <TestimonialSection />
      <NewsletterBanner />
    </div>
  );
};

export default Index;
