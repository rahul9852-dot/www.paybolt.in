import InstantBankingBanner from "./InstantBankingBanner/InstantBankingBanner";
import InstantBankingOutline from "./InstantBankingOutline/InstantBankingOutline";
import InstantBankingVerification from "./InstantBankingVerification/InstantBankingVerification";
import InstantBankingStatus from "./InstantBankingStatus/InstantBankingStatus";
import { CustomerSaying } from "../Home/CustomerSaying";
import "./InstantBanking.scss";

const InstantBanking = () => {
  return (
    <>
      <div className="instant-banking-banner pt-40 px-4">
        <InstantBankingBanner />
      </div>
      <InstantBankingOutline />
      <InstantBankingVerification />
      <InstantBankingStatus />
      <CustomerSaying />
    </>
  );
};

export default InstantBanking;
