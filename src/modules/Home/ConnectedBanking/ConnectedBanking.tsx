import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import connectedBanking from "@public/images/connected-banking.png";
// import logoLightFull from '@public/images/logos/light-full.svg';
import { PreFooter } from "@modules/Home/PreFooter";

import "./ConnectedBanking.scss";

export const ConnectedBanking = () => {
  return (
    <section className="connected-banking-wrapper">
      <div className="connected-banking">
        <div className="left">
          <h3 className="text-3xl font-semibold max-w-md text-left pb-5">
            Smart connected banking APIs with&nbsp;&nbsp;
            {/* <Image
              src={logoLightFull}
              alt="PayBolt"
              width={200}
              height={100}
              className="inline-block"
            /> */}
          </h3>
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
          <Link href="/" className="btn mt-10">
            <span>More Details</span>
            <FaArrowRightLong className="relative top-[1px] text-xl" />
          </Link>
        </div>
        <div className="right">
          <Image
            src={connectedBanking}
            alt="Connected Banking"
            width={500}
            height={500}
          />
        </div>
      </div>
      <PreFooter />
    </section>
  );
};
