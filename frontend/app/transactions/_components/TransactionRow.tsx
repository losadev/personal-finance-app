export const TransactionRow = () => {
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
