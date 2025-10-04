import ButtonTerciary from "../ButtonTerciary";

const TransactionRow = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1 space-x-4 flex items-center">
        <span className="size-8 inline-block bg-gray-300 rounded-full aspect-square">
          {/* ESTA ES LA FOTO DE PERFIL */}
        </span>
        <span className="font-bold text-[14px] leading-[150%] tracking-normal">
          Emma Richardson
        </span>
      </div>
      <div className="space-y-2 flex flex-col items-end">
        <span className="text-[14px] font-bold leading-[150%] tracking-normal">
          +$75
        </span>
        <span className="text-[12px] leading-[150%] tracking-normal text-[#696868]">
          14 Aug 2025
        </span>
      </div>
    </div>
  );
};

const TransactionsCard = () => {
  return (
    <section className="bg-[#ffffff] py-6 px-5 rounded-lg space-y-8">
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
