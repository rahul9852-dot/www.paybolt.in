"use client";
import SuccessSign from "@public/Icons/SuccessSignIcon";
import upiQr from "@public/images/upi-qr.png";
import dynamicQr from "@public/images/dynamic-qr.png";
import moneyTransfer from "@public/images/money-transfer.png";
import payoutService from "@public/images/payout-service.png";
import posService from "@public/images/pos-service.png";
import instantBanking from "@public/images/instant-banking.png";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const INDIA_IN_DIFF_LANG = [
  "INDIA",
  "ভারত",
  "भारत",
  "இந்தியா",
  "భారతదేశం",
  "ಭಾರತ",
  "ഇന്ത്യ",
  "ભારત",
  "ਭਾਰਤ",
  "ଭାରତ",
  "ভাৰত",
];

export const HOME_FEATURES = [
  {
    title: "Connect all your bank accounts",
    description:
      "Connect your current accounts to PayBolt to easily send and receive payments",
    icon: SuccessSign,
  },
  {
    title: "Create bills and invoices",
    description:
      "Create bills and invoices on PayBolt or import them from your accounting software",
    icon: SuccessSign,
  },
  {
    title: "Reconcile payments automatically",
    description:
      "Pay bills or get paid using your connected bank accounts and reconcile payments",
    icon: SuccessSign,
  },
];

export const HOME_PRODUCTS = [
  {
    title: "UPI QR Collections",
    description:
      "Enable quick and easy payments with our UPI QR. Scan QR code or manually enter UPI ID",
    imageSrc: upiQr,
    href: "/products",
  },
  {
    title: "Dynamic QR Collections",
    description:
      "Generate dynamic QR codes for each transaction to ensure accuracy and security",
    imageSrc: dynamicQr,
    href: "/products",
  },
  {
    title: "Money Transfer",
    description:
      "Seamlessly transfer funds with our reliable and fast money transfer services",
    imageSrc: moneyTransfer,
    href: "/products",
  },
  {
    title: "Payout Services",
    description:
      "Manage your payouts with ease using our comprehensive payout services",
    imageSrc: payoutService,
    href: "/products",
  },
  {
    title: "POS Devices",
    description: "Equip your business with state-of-the-art POS devices.",
    imageSrc: posService,
    href: "/products",
  },
  {
    title: "Instant Bank Account Opening",
    description:
      "Open bank accounts instantly and start transacting without any delays.",
    imageSrc: instantBanking,
    href: "/products",
  },
];

export const FOOTER_SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "/",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/paybolt-in/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "/",
    icon: FaFacebookF,
  },
];

export const NO_FAQ_ROUTES = ["/", "/contact"];
