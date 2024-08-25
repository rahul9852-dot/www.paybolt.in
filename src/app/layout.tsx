import { PropsWithChildren } from "react";

import { MetadataRoutes } from "@/enums/route.enum";
import { metadataConfig } from "@/config/metadata.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { primaryFont } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";

import "./globals.scss";

export const metadata = metadataConfig[MetadataRoutes.HOME];

export default ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body
        className={cn(primaryFont.className, "antialiased text-foreground")}
      >
        <Header />
        {children}
        <FaqAccordion />
        <Footer />
      </body>
    </html>
  );
};
