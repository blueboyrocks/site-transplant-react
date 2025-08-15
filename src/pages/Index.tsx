import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'
import TestimonialsSection from '../components/TestimonialsSection'

import CTASection from '../components/CTASection'

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <TestimonialsSection />
      
      <CTASection />
    </div>
  );
};

export default Index;
