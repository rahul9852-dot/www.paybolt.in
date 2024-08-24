import InstantBankingBanner from "./InstantBankingBanner/InstantBankingBanner";
import './InstantBanking.scss';
const InstantBanking = () =>{
  return (
    <>
      <div className="instant-banking-banner pt-40 bg-red-500">
        <InstantBankingBanner/>
      </div>
    </>
  )
}

export default InstantBanking;