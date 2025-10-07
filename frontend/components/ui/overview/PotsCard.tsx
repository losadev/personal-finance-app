import React from "react";
import MiniStatCard from "./MiniStatCard";
import Image from "next/image";
import ButtonTerciary from "../ButtonTerciary";

const PotsCard = () => {
  return (
    <section className="py-6 px-5 bg-[#ffffff] rounded-lg space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-preset-2">Pots</h1>
        <ButtonTerciary text="See details" />
      </div>
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-5">
        <div className="md:col-start-1 md:col-end-1 bg-[var(--color-beige-100-app)] p-4 rounded-lg flex gap-4 items-center min-w-38">
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
        <div className="md:col-start-2 md:col-end-4 grid grid-rows-2 grid-cols-2 gap-4">
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
      </div>
    </section>
  );
};

export default PotsCard;
