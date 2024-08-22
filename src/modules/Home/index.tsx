import { ConnectedBanking } from './ConnectedBanking';
import { CtaBanner } from './CtaBanner';
import { CustomerSaying } from './CustomerSaying';
import { ExploreProducts } from './ExploreProducts';
import { Features } from './Features';
import { Hero } from './Hero';

export const Home = () => {
  return (
    <>
      <Hero />
      <CtaBanner />
      <Features />
      <ExploreProducts />
      <CustomerSaying />
      <ConnectedBanking />
    </>
  );
};
