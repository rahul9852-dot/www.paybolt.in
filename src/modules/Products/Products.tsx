import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Features } from '@modules/UpiQrCollections';
import { CustomerSaying } from '@modules/Home/CustomerSaying';
import { ProductCard } from './ProductCard';
import { PRODUCTS_FEATURES } from '@/constants/products.constant';

import productHero from '@public/images/products-hero.png';

import './Products.scss';

export const Products = () => {
  return (
    <section className="products-wrapper">
      <div className="products">
        <Image
          src={productHero}
          alt="Products"
          width={700}
          height={600}
          className="img"
          quality={100}
        />

        <div className="flex flex-col justify-center items-center md:items-start gap-8">
          <h1 className="text-4xl font-semibold text-primary mt-0 lg:mt-16">
            Products
          </h1>
          <p className="text-center md:text-start">
            PayBolt payment gateway provides a secure and reliable method of
            accepting online payments
          </p>
          <Link className="btn mt-3" href="/register">
            <span>Sign up for free</span>
            <FaArrowRightLong className="relative top-[1px] text-xl" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-2 flex flex-col justify-center items-center gap-5 mt-20">
        <h2 className="text-center text-3xl font-semibold text-primary lg:max-w-[800px]">
          Paybolt offers full-stack payment solutions tailored to real estate
          businesses
        </h2>

        <p className="text-center lg:max-w-[800px]">
          Boost your real estate business with PayBolt. Customize your pre and
          post-checkout pages to reflect your brand, offer 100+ payment modes,
          and integrate plug-and-play APIs with ERP and SaaS software. Instant
          settlement of funds to different property bank accounts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {PRODUCTS_FEATURES.map(feature => (
            <ProductCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
      <Features />
      <div className="benefits-realized">
        <div className="benefits">
          <h3 className="text-3xl font-semibold text-center mb-20">
            Benefits Realized
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            <p className="para">
              <span className="num">01</span>
              <span>Seamless integration with DLF ERP</span>
            </p>
            <p className="para">
              <span className="num">02</span>
              <span>
                Generate and share customer-specific payment links with clients
                for recurring payment collection
              </span>
            </p>
            <p className="para">
              <span className="num">03</span>
              <span>
                Ensure accurate and efficient transaction-wise settlements in
                individual project accounts.
              </span>
            </p>
            <p className="para">
              <span className="num">04</span>
              <span>
                Easy sub-merchant management allows DLF to manage individual
                properties as sub-merchants, making transactions easier to
                reconcile.
              </span>
            </p>
            <p className="para">
              <span className="num">05</span>
              <span>
                Payments are collected online through customized payment pages,
                especially for regular payments.
              </span>
            </p>
          </div>
        </div>
      </div>
      <CustomerSaying />
    </section>
  );
};
