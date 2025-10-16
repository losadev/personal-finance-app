import TransactionsTable from "@/components/transactions/TransactionsTable";
import Image from "next/image";

function page() {
  return (
    <main className="py-6 px-4 flex flex-col gap-8 bg-[var(--color-beige-100-app)] h-full md:px-10 md:py-8">
      <h1 className=" text-[var(--color-gray-900-app)] text-preset-1">
        Transactions
      </h1>
      {/* Table */}
      <section className="bg-[var(--color-white-app)] h-full rounded-lg py-6 px-5 flex flex-col gap-6 mb-8">
        <div className="flex flex-row justify-between w-full gap-2">
          <div className="px-5 py-3 rounded-lg flex  border-1 border-[var(--color-beige-500-app)] placeholder:text-preset-4">
            <input type="text" placeholder="Search transaction" />
            <Image
              alt="icon search"
              src={"/assets/images/icon-search.svg"}
              width={20}
              height={20}
            />
          </div>
          <div className="flex gap-6">
            {/* Filters */}
            <Image
              alt="sort"
              src={"/assets/images/sort.svg"}
              width={20}
              height={20}
            />
            <Image
              alt="filter"
              src={"/assets/images/icon-filter-mobile.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="h-full">
          <TransactionsTable />
        </div>
      </section>
    </main>
  );
}

export default page;
