import BudgetCard from "@/components/ui/overview/BudgetCard";
import PotsCard from "@/components/ui/overview/PotsCard";
import RecurringBillsCard from "@/components/ui/overview/RecurringBillsCard";
import StatCard from "@/components/ui/overview/StatCard";
import TransactionsCard from "@/components/transactions/TransactionsCard";

export default function page() {
  return (
    <div className="bg-[var(--color-beige-100-app)] py-6 px-4 grid grid-rows-[auto_auto_1fr] gap-8">
      <div>
        <h1 className=" text-[var(--color-gray-900-app)] text-preset-1">
          Overview
        </h1>
      </div>

      <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        <StatCard
          amount="$4,386.00"
          title="Current balance"
          className="bg-[var(--color-gray-900-app)] text-[var(--color-white-app)]"
        />
        <StatCard
          amount="$4,386.00"
          title="Income"
          className="text-[var(--color-gray-900)] bg-[var(--color-white-app)]"
        />
        <StatCard
          amount="$4,386.00"
          title="Expenses"
          className="text-[var(--color-gray-900)] bg-[var(--color-white-app)]"
        />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="space-y-6 flex-1 h-full">
          {/* POTS */}
          <PotsCard />
          {/* TRANSACTIONS */}
          <TransactionsCard />
        </div>
        <div className="space-y-6 flex-1 h-full">
          {/*  BUDGETS */}
          <BudgetCard />
          {/* RECURRENT BILLS CARD */}
          <RecurringBillsCard />
        </div>
      </div>
    </div>
  );
}
