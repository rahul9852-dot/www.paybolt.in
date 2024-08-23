import { metadataConfig } from '@/config/metadata.config';
import { MetadataRoutes } from '@/enums/route.enum';
import { PropsWithChildren } from 'react';

export const metadata = metadataConfig[MetadataRoutes.MONEY_TRANSFER];

export default ({ children }: PropsWithChildren) => children;
