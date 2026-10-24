import ButtonTerciary from "../ui/ButtonTerciary";
import { TransactionRow } from "./TransactionRow";

const TransactionsCard = () => {
  return (
    <section className="bg-[#ffffff] py-6 px-5 rounded-lg space-y-8 lg:col-start-1 lg:col-end-1 lg:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-preset-2">Transactions</h1>
        <ButtonTerciary text="View all" />
      </div>

      <div className="space-y-4">
        <TransactionRow />
        <hr className="text-[#F2F2F2]" />
        <TransactionRow />
        <hr className="text-[#F2F2F2]" />
        <TransactionRow />
        <hr className="text-[#F2F2F2]" />
        <TransactionRow />
        <hr className="text-[#F2F2F2]" />
        <TransactionRow />
      </div>
    </section>
  );
};

export default TransactionsCard;
