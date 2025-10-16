import Image from "next/image";

type Transaction = {
  id: string;
  counterparty: string;
  category: string;
  date: string; // ISO
  amount: number; // positive = income, negative = expense
  avatar?: string;
};

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    counterparty: "Emma Richardson",
    category: "Salary",
    date: "2025-08-14",
    amount: 75,
    avatar: undefined,
  },
  {
    id: "2",
    counterparty: "Bravo zen spa",
    category: "Personal care",
    date: "2025-08-29",
    amount: -25,
    avatar: undefined,
  },
  {
    id: "3",
    counterparty: "Whole Foods",
    category: "Groceries",
    date: "2025-09-05",
    amount: -42.5,
    avatar: undefined,
  },
  {
    id: "4",
    counterparty: "Stripe",
    category: "Income",
    date: "2025-09-10",
    amount: 1200,
    avatar: undefined,
  },
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
}

const MobileRow = ({ t }: { t: Transaction }) => (
  <div key={t.id} className="py-4">
    <div className="flex items-center">
      <div className="flex-1 space-x-4 flex items-center">
        <span className="size-8 inline-block bg-gray-300 rounded-full aspect-square">
          {/* avatar */}
        </span>
        <span className="font-bold text-[14px] leading-[150%] tracking-normal">{t.counterparty}</span>
      </div>
      <div className="space-y-2 flex flex-col items-end">
        <span className={`text-[14px] font-bold leading-[150%] tracking-normal ${t.amount > 0 ? "text-green-600" : "text-red-600"}`}>
          {t.amount > 0 ? `+$${Math.abs(t.amount)}` : `-$${Math.abs(t.amount)}`}
        </span>
        <span className="text-[12px] leading-[150%] tracking-normal text-[#696868]">{formatDate(t.date)}</span>
      </div>
    </div>
  </div>
);

const DesktopRow = ({ t }: { t: Transaction }) => (
  <tr key={t.id} className="flex text-left gap-2 py-4">
    <td className="text-preset-4-bold text-[var(--color-gray-900-app)] flex-3 flex items-center gap-4">
      <span className="size-8 inline-block bg-gray-300 rounded-full aspect-square" />
      {t.counterparty}
    </td>
    <td className="text-preset-5 text-[var(--color-gray-500-app)] flex-2 flex items-center">{t.category}</td>
    <td className="text-preset-5 flex-2 flex items-center">{formatDate(t.date)}</td>
    <td className={`text-preset-4-bold text-[var(--color-gray-900-app)] flex-1 flex items-center ${t.amount > 0 ? "text-green-600" : "text-red-600"}`}>
      {t.amount > 0 ? `+$${Math.abs(t.amount)}` : `-$${Math.abs(t.amount)}`}
    </td>
  </tr>
);

const TransactionsTable = () => {
  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex-1">
    {/* MOBILE */}
      <div className="md:hidden">
        {MOCK_TRANSACTIONS.map((t) => (
          <div key={t.id}>
            <MobileRow t={t} />
            <hr className="text-[#F2F2F2]" />
          </div>
        ))}
      </div>
      {/* DESKTOP / TABLET */}
      <table className="hidden md:flex md:flex-col min-w-full">
        <thead className="w-full ">
          <tr className="text-preset-5 text-[var(--color-gray-500-app)]  flex text-left gap-2 py-8">
            <th className="flex-3 ">Recipient / Sender</th>
            <th className="flex-2">Category</th>
            <th className="flex-2">Transaction date</th>
            <th className="flex-1">Amount</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {MOCK_TRANSACTIONS.map((t) => (
            <DesktopRow key={t.id} t={t} />
          ))}
        </tbody>
      </table>

      </div>
       <div className="flex items-center  gap-2 ">
          <button aria-label="previous" type="button" className="border-1 px-4 py-2 rounded-lg border-[var(--color-beige-500-app)] md:flex gap-4">
            <Image src="/assets/images/icon-caret-right.svg" alt="previous" width={11} height={6} className="w-auto h-auto" />
            <span className="hidden md:block">Prev</span>
          </button>
          <div className="flex gap-2  flex-1  justify-center">
            <button type="button" className="border-1 rounded-lg px-4 py-2 border-[var(--color-beige-500-app)] text-preset-4">1</button>
            <button type="button" className="border-1 rounded-lg px-4 py-2 border-[var(--color-beige-500-app)] text-preset-4">2</button>
            <button type="button" className="border-1 rounded-lg px-4 py-2 border-[var(--color-beige-500-app)] text-preset-4">...</button>
            <button type="button" className="border-1 rounded-lg px-4 py-2 border-[var(--color-beige-500-app)] text-preset-4">5</button>
          </div>
          <button aria-label="next" type="button" className="border-1 rounded-lg px-4 py-2 border-[var(--color-beige-500-app)] md:flex md:gap-4">
            <Image src="/assets/images/icon-caret-right.svg" alt="next" width={11} height={6} className="w-auto h-auto" />
            <span className="hidden md:block">Next</span>
          </button>
        </div>
    </div>
  );
};

export default TransactionsTable;
