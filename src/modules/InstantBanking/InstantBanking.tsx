import InstantBankingBanner from "./InstantBankingBanner/InstantBankingBanner";
import InstantBankingOutline from "./InstantBankingOutline/InstantBankingOutline";
import InstantBankingVerification from "./InstantBankingVerification/InstantBankingVerification";
import InstantBankingStatus from "./InstantBankingStatus/InstantBankingStatus";
import BankingApi from "./BankingApiIntegeration/BankingApi";
import './InstantBanking.scss';
import { CustomerSaying } from "../Home/CustomerSaying";

const InstantBanking = () => {
  return (
    <>
      <div className="instant-banking-banner pt-40 px-4">
        <InstantBankingBanner/>
      </div>
      <InstantBankingOutline />
      <InstantBankingVerification />
      <InstantBankingStatus />
      <BankingApi />
      <CustomerSaying/>
    </>
  )
}

export default InstantBanking;