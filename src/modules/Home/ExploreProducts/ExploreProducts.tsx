"use client";
import Link from "next/link";
import Image from "next/image";

import { HOME_PRODUCTS } from "@/constants/common.constant";

import "./ExploreProducts.scss";

export const ExploreProducts = () => {
  return (
    <section className="explore-products-wrapper">
      <div className="explore-products">
        <h3 className="text-4xl font-semibold text-center">Explore Products</h3>
        <div className="products">
          {HOME_PRODUCTS.map(({ title, description, href, imageSrc }) => (
            <div className="product-item" key={title}>
              <Image
                src={imageSrc}
                alt={title}
                width={400}
                className="w-full"
              />
              <div className="product-details">
                <h5 className="text-xl font-semibold text-foreground">
                  {title}
                </h5>
                <p className="text-sm text-foreground/70">{description}</p>
                <Link
                  href={href}
                  className="text-xs text-background bg-primary/90 px-3 py-1 rounded-full w-fit mt-3"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
