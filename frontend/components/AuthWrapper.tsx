import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#F2F3F7] grid grid-rows-2">
      <nav className="bg-[#201F24] rounded-b-lg flex justify-center px-10 py-6 row-end-1 lg:hidden">
        <Image
          alt="App logo"
          className="w-[121px] h-[22px]"
          src={"/assets/images/logo-large.svg"}
          height={100}
          width={300}
          aria-label="App logo"
        />
      </nav>
      <div className=" rounded-lg row-start-1 row-end-3 flex items-center justify-center px-4 py-5">
        <div className="rounded-lg hidden lg:flex h-full w-full flex-col p-10 bg-cover justify-between flex-1 bg-[url(/assets/images/illustration-authentication.svg)]">
          <Image
            alt="App logo"
            className="w-[121px] h-[22px]"
            src={"/assets/images/logo-large.svg"}
            height={100}
            width={300}
            aria-label="App logo"
          />
          <div className="text-[#ffffff] space-y-6">
            <h1 className="font-bold text-[32px] tracking-normal leading-10">
              Keep track of your money and save for your future
            </h1>
            <p className="text-[14px] leading-4.5 tracking-normal">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
        <div className=" h-full w-full flex-2 items-center justify-center flex">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
