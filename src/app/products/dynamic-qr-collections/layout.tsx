import { metadataConfig } from "@/config/metadata.config";
import { MetadataRoutes } from "@/enums/route.enum";
import { PropsWithChildren } from "react";

export const metadata = metadataConfig[MetadataRoutes.DYNAMIC_QR_COLLECTIONS];

export default ({ children }: PropsWithChildren) => children;
