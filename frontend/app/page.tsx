import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F8F4F0] min-h-screen py-6 px-4 grid grid-rows-[auto_auto_1fr] gap-8">
      <div>
        <h1 className="text-[32px] text-[#201F24] font-bold leading-[120%] tracking-normal">
          Overview
        </h1>
      </div>
      <div className="space-y-3">
        <section className="p-5 rounded-lg bg-[#201F24] flex flex-col gap-3 text-[#ffffff]">
          <span className="text-[14px] leading-[150%] tracking-normal">Current balance</span>
          <span className="text-[32px] font-bold leading-[120%] tracking-normal">$4,836.00</span>
        </section>
         <section className="p-5 rounded-lg bg-[#ffffff] flex flex-col gap-3 text-[#201F24]">
          <span className="text-[14px] leading-[150%] tracking-normal">Income</span>
          <span className="text-[32px] font-bold leading-[120%] tracking-normal">$3,814.25</span>
        </section>
         <section className="p-5 rounded-lg bg-[#ffffff] flex flex-col gap-3 text-[#201F24]">
          <span className="text-[14px] leading-[150%] tracking-normal">Expenses</span>
          <span className="text-[32px] font-bold leading-[120%] tracking-normal">$1,700.50</span>
        </section>
      </div>
      <div className="flex flex-col gap-4">
        <section className="py-6 px-5 bg-[#ffffff] rounded-lg space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="text-[20px] leading-[120%] tracking-normal font-bold">Pots</h1>
            <button type="button" className="flex gap-2 items-center text-[14px] leading-1.5 tracking-normal text-[#696868]">
              See detail 
              <span><Image alt="icon caret right" src={"/assets/images/icon-caret-right.svg"} height={5} width={5}/></span>
            </button>
          </div>
          <div className="bg-[#F8F4F0] p-4 rounded-lg flex gap-4 items-center">
            <Image alt="" src={"/assets/images/icon-pot.svg"} width={34} height={100}/>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] leading-1.5 tracking-normal text-[#696868]">Total save</span>
              <span className="text-[32px] font-bold leading-[120%] tracking-normal text-[#201F24]">$875</span>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <div className="flex gap-6">
              <span className="border-2 border-amber-400 rounded-full "></span>
              <div className="flex flex-col">
                <h1 className="text-[12px] leading-[150%] tracking-normal text-[#696868]">Savings</h1>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">$159</span>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="border-2 border-red-400 rounded-full "></span>
              <div className="flex flex-col">
                <h1 className="text-[12px] leading-[150%] tracking-normal text-[#696868]">Gift</h1>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">$79</span>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="border-2 border-blue-400 rounded-full "></span>
              <div className="flex flex-col">
                <h1 className="text-[12px] leading-[150%] tracking-normal text-[#696868]">Concert ticket</h1>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">$19</span>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="border-2 border-green-400 rounded-full "></span>
              <div className="flex flex-col">
                <h1 className="text-[12px] leading-[150%] tracking-normal text-[#696868]">New laptop</h1>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">$50</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] py-6 px-5 rounded-lg space-y-8">
           <div className="flex justify-between items-center">
            <h1 className="text-[20px] leading-[120%] tracking-normal font-bold">Transactions</h1>
            <button type="button" className="flex gap-2 items-center text-[14px] leading-1.5 tracking-normal text-[#696868]">
              View all 
              <span><Image alt="icon caret right" src={"/assets/images/icon-caret-right.svg"} height={5} width={5}/></span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">scx</span>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">Emma Richardson</span>
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
            <hr className="text-[#F2F2F2]"/>
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">scx</span>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">Emma Richardson</span>
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
            <hr className="text-[#F2F2F2]"/>
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">scx</span>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">Emma Richardson</span>
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
            <hr className="text-[#F2F2F2]"/>
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">scx</span>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">Emma Richardson</span>
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
            <hr className="text-[#F2F2F2]"/>
            <div className="flex items-center">
              <div className="flex-1 space-x-2">
                <span className="min-h-8 min-w-8 bg-gray-600 rounded-full aspect-square">scx</span>
                <span className="font-bold text-[14px] leading-[150%] tracking-normal">Emma Richardson</span>
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

      </div>      
    </div>
  );
}
