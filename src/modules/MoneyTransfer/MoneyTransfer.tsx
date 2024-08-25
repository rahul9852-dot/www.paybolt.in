import MoneyTransferBanner from "./MoneyTransferBanner/MoneyTransferBanner";
import "./MoneyTransfer.scss";
import MoneyTransferOutlines from "./MoneyTransferOutline/MoneyTransferOutlines";
import MoneyTransferFeatures from "./MoneyTransferFeatures/MoneyTransferFeatures";
import PGAdvantage from "../../components/PGAdvantage/PGAdvantage";
const MoneyTransfer = () => {
  return (
    <>
      <div className="money-transfer-banner pt-40">
        <MoneyTransferBanner />
      </div>
      <MoneyTransferOutlines />
      <MoneyTransferFeatures />
      <PGAdvantage />
    </>
  );
};

export default MoneyTransfer;
