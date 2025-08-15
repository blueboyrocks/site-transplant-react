import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'

const Index = () => {
  return (
    <>
      <SEO 
        title="LeapGen.AI - Transform Your Business with AI Solutions"
        description="Boost productivity by 40%, reduce errors by 75%, and unlock powerful insights with LeapGen.AI's enterprise-grade AI solutions. Trusted by 500+ organizations worldwide."
        keywords="AI solutions, artificial intelligence, enterprise AI, business automation, productivity, SurroundAI, Data Coffee, healthcare AI, finance AI"
        url="https://leapgen.ai"
      />
      <div className="min-h-screen">
        <HeroSection />
        <ProductsSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default Index;
