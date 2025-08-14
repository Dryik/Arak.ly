import { HeaderAr } from '@/components/HeaderAr';
import { HeroSectionAr } from '@/components/HeroSectionAr';
import { AboutSectionAr } from '@/components/AboutSectionAr';
import { ServicesSectionAr } from '@/components/ServicesSectionAr';
import { IndustriesSectionAr } from '@/components/IndustriesSectionAr';
import { PartnersSectionAr } from '@/components/PartnersSectionAr';
import { ContactSectionAr } from '@/components/ContactSectionAr';
import { FooterAr } from '@/components/FooterAr';

const IndexAr = () => {
  return (
    <div className="min-h-screen">
      <HeaderAr />
      <HeroSectionAr />
      <AboutSectionAr />
      <ServicesSectionAr />
      <IndustriesSectionAr />
      <PartnersSectionAr />
      <ContactSectionAr />
      <FooterAr />
    </div>
  );
};

export default IndexAr;
