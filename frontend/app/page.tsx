import ButtonTerciary from "@/components/ui/ButtonTerciary";
import MiniStatCard from "@/components/ui/overview/MiniStatCard";
import StatCard from "@/components/ui/overview/StatCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[var(--color-beige-100-app)] min-h-screen py-6 px-4 grid grid-rows-[auto_auto_1fr] gap-8">
      <div>
        <h1 className="text-[32px] text-[var(--color-gray-900-app)] text-preset-1">
          Overview
        </h1>
      </div>

      <div className="space-y-3">
        <StatCard
          amount="$4,386.00"
          title="Current balance"
          className="bg-[var(--color-gray-900)] text-[var(--color-white-app)]"
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

      <div className="flex flex-col gap-4">
        {/* POTS */}
        <section className="py-6 px-5 bg-[#ffffff] rounded-lg space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="text-preset-2">Pots</h1>
            <ButtonTerciary text="See details"/>
          </div>
          <div className="bg-[var(--color-beige-100-app)] p-4 rounded-lg flex gap-4 items-center">
            <Image
              alt=""
              src={"/assets/images/icon-pot.svg"}
              width={34}
              height={100}
            />
            <div className="flex flex-col gap-2">
              <span className="text-preset-4 text-[var(--color-gray-500)]">
                Total save
              </span>
              <span className="text-preset-1 text-[var(--color-gray-900)]">
                $875
              </span>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <MiniStatCard
              amount="$150"
              color="text-[var(--color-green-app)]"
              title="Savings"
            />
            <MiniStatCard
              amount="$50"
              color="text-[var(--color-blue-app)]"
              title="Gift"
            />
            <MiniStatCard
              amount="$30"
              color="text-[var(--color-navy-app)]"
              title="Concert ticket"
            />
            <MiniStatCard
              amount="$400"
              color="text-[var(--color-red-app)]"
              title="New laptop"
            />
          </div>
        </section>
        {/* TRANSACTIONS */}
        <section className="bg-[#ffffff] py-6 px-5 rounded-lg space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-preset-2">
              Transactions
            </h1>
            <ButtonTerciary text="View all"/>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">
                  scx
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
            <hr className="text-[#F2F2F2]" />
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">
                  scx
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
            <hr className="text-[#F2F2F2]" />
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">
                  scx
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
            <hr className="text-[#F2F2F2]" />
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">
                  scx
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
            <hr className="text-[#F2F2F2]" />
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">
                  scx
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
          </div>
        </section>
        {/*  BUDGETS */}
      </div>
    </div>
  );
}
