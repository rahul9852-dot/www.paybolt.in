import { MetadataRoutes } from '@/enums/route.enum';
import { metadataConfig } from '@/config/metadata.config';
import { Header } from '@/components/Header';
import { primaryFont } from '@/utils/fonts';
import { cn } from '@/utils/cn';

import './globals.scss';

export const metadata = metadataConfig[MetadataRoutes.HOME];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(primaryFont.className, 'antialiased text-foreground')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
