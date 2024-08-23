import MoneyTransferBanner from "./MoneyTransferBanner/MoneyTransferBanner";
import './MoneyTransfer.scss'
import MoneyTransferOutlines from "./MoneyTransferOutline/MoneyTransferOutlines";
import MoneyTransferFeatures from "./MoneyTransferFeatures/MoneyTransferFeatures";
import MAdvantage from "./MAdvantage/MAdvantage";
import Accordion from "@/components/Accordion/Accordion";
const MoneyTransfer = () =>{

  return (
    <>
      <div className="money-transfer-banner pt-40">
        <MoneyTransferBanner/>
      </div>
      <MoneyTransferOutlines/>
      <MoneyTransferFeatures/>
      <MAdvantage/>
    </>
  )
}

export default MoneyTransfer;
