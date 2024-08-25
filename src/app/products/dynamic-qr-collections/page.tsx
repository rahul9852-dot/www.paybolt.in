import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { Features, Hero } from "@/modules/DynamicQrCollections";
import { Steps } from "@/modules/DynamicQrCollections/Steps";

import phoneImg from "@public/images/phone-img.png";
import boxPuzzle from "@public/images/boxes-puzzle.png";
import { CustomerSaying } from "@/modules/Home/CustomerSaying";

export default () => {
  return (
    <section className="pt-20">
      <Hero />
      <Features />
      <Steps heading="Smart connected banking APIs with">
        <ol className="list">
          <li className="item">
            <i className="num">01</i>
            <span>
              Integrate your current accounts with PayBolt Connected Banking
            </span>
          </li>
          <li className="item">
            <i className="num">02</i>
            <span>
              Complete payment suite for digital collections & payouts
            </span>
          </li>
          <li className="item">
            <i className="num">03</i>
            <span>Expense management with PayBolt</span>
          </li>
          <li className="item">
            <i className="num">04</i>
            <span>Get financial & business reports at one place</span>
          </li>
        </ol>
      </Steps>
      <div className="container mx-auto px-2 pt-20 pb-36">
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">
          Automated payment collections with PayBolt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 place-items-center">
          <Image
            src={phoneImg}
            alt="PayBolt"
            width={500}
            height={500}
            className="w-full object-center rounded-lg rounded-tr-[100px] rounded-bl-[100px]"
            quality={100}
          />
          <div className="flex flex-col gap-5">
            <p>
              Create and share payment links with PayBolt. Set automated payment
              reminders for all your subscription-based payments with PayBolt.
              Watch the video to know more.
            </p>
            <Link href="/" className="btn">
              <span>More Details</span>
              <FaArrowRightLong className="relative top-[1px] text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <Steps
        className="clip-right !mt-0"
        image={boxPuzzle}
        heading="Tally and Excel integration with"
      >
        <ol className="list">
          <li className="item">
            <i className="num">01</i>
            <span>
              Generate payment links directly from Tally or Excel without
              visiting the dashboard or ERP software.
            </span>
          </li>
          <li className="item">
            <i className="num">02</i>
            <span>
              Set automated reminder links with error-free reconciliation of
              payment records and comprehensive reports for tracking and
              analyzing payment status.
            </span>
          </li>
        </ol>
      </Steps>
      <CustomerSaying />
    </section>
  );
};
