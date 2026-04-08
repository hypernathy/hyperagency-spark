import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TickerStrip from '@/components/TickerStrip';
import SeeYouSection from '@/components/SeeYouSection';
import FounderSection from '@/components/FounderSection';
import SparkSection from '@/components/SparkSection';
import PowerHourSection from '@/components/PowerHourSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import QuoteFooter from '@/components/QuoteFooter';
import SparkChat from '@/components/SparkChat';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection onOpenChat={() => setChatOpen(true)} />
        <TickerStrip />
        <SeeYouSection />
        <FounderSection />
        <SparkSection onOpenChat={() => setChatOpen(true)} />
        <PowerHourSection />
        <ServicesSection />
        <ContactSection />
        <QuoteFooter />
      </main>
      <SparkChat isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </LanguageProvider>
  );
};

export default Index;
