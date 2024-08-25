import BurstsIcon from "@public/Icons/BurstsIcon";
import CheckIcon from "@public/Icons/CheckLock";
import QuickModeIcon from "@public/Icons/QuickModeIcon";
import UserGroupIcon from "@public/Icons/UserGroup";

interface InstantBankingFeatures {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const InstantBankingServiceConstants: InstantBankingFeatures[] = [
  {
    icon: QuickModeIcon,
    title: "Instant Approval",
    description:
      "Transfer money instantly across accounts. Transfer money instantly across accounts.",
  },
  {
    icon: BurstsIcon,
    title: "Minimal Documentation",
    description:
      "Enjoy competitive fees for all transactions Transfer money instantly across accounts.",
  },
  {
    icon: CheckIcon,
    title: "Secure Process",
    description:
      "Our service ensures all transactions are secure and encrypted.",
  },
  {
    icon: UserGroupIcon,
    title: "24/7 Support",
    description:
      "Send and receive money using mobile, web, or API integrations.",
  },
];

interface InstantBankingBenefits {
  title: string;
  description: string;
}

export const InstantBankingServiceBeneFits: InstantBankingBenefits[] = [
  {
    title: "Payment processing",
    description: "Enhance customer experience with fast payment processing.",
  },
  {
    title: "Security",
    description: "Improve security for all transactions",
  },
  {
    title: "Multiple payment",
    description: "Offer multiple payment options to customers",
  },
];
