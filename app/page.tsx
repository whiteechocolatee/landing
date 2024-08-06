import { Dignities } from '@/components/dignities/dignities';
import { Faq } from '@/components/faq/faq';
import { Help } from '@/components/help/help';
import { Hero } from '@/components/hero/hero';
import { Prices } from '@/components/prices/prices';
import { Services } from '@/components/services/services';
import { WhyUs } from '@/components/whyus/whyus';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Dignities />
      <Help />
      <Prices />
      <Faq />
    </>
  );
}
