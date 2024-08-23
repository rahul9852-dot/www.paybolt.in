import { metadataConfig } from '@/config/metadata.config';
import { MetadataRoutes } from '@/enums/route.enum';
import { PropsWithChildren } from 'react';

export const metadata = metadataConfig[MetadataRoutes.INSTANT_BANKING];

export default ({ children }: PropsWithChildren) => children;
