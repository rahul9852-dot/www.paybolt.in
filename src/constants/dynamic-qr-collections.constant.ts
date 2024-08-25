import { AiFillReconciliation } from "react-icons/ai";
import { BiQrScan, BiSolidCustomize } from "react-icons/bi";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { IoIosCard, IoMdTimer } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

export const DYNAMIC_FEATURES = [
  {
    title: "ENACH on EasyCollect",
    description:
      "Initiate e-mandate with QR Collect link & generate link using dashboard with single or bulk upload facility.",
    icon: IoIosCard,
  },
  {
    title: "Share automated payment reminders for instant online payments",
    description:
      "Send automated payment reminders for instant payment collections via WhatsApp, SMS or Email.",
    icon: BsFillPhoneVibrateFill,
  },
  {
    title: "Create a link using APIs & dashboard",
    description:
      "Create and share an EasyCollect link for multiple customers by uploading an Excel file.",
    icon: FaLink,
  },
  {
    title: "Customize templates for collections",
    description:
      "Make use of customized templates & send reminders to customers via SMS or WhatsApp, Email.",
    icon: BiSolidCustomize,
  },
  {
    title: "Disburse money to submerchants",
    description:
      "Create a link for your sub-merchants and directly settle payments into their account.",
    icon: RiMoneyRupeeCircleFill,
  },
  {
    title: "Get real-time payment updates",
    description:
      "With Webhook integration, get real-time notifications on payments via Email, or SMS",
    icon: IoMdTimer,
  },
];

export const DYNAMIC_FEAT_CARDS = [
  {
    title: "Unique QR Codes",
    description:
      "Transfer money instantly across accounts. Transfer money instantly across accounts.",
    icon: BiQrScan,
  },
  {
    title: "Enhanced Security",
    description:
      "Enjoy competitive fees for all transactions, Transfer money instantly across accounts.",
    icon: MdSecurity,
  },
  {
    title: "Easy Reconciliation",
    description:
      "Our service ensures all transactions are secure and encrypted.",
    icon: AiFillReconciliation,
  },
  {
    title: "Reports Download",
    description:
      "Send and receive money using mobile, web, or API integrations.",
    icon: TbReportAnalytics,
  },
];
