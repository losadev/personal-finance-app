import Image from "next/image";
import React from "react";

function SignIn() {
  return (
    <div className="min-h-screen bg-[#F2F3F7] grid grid-rows-2">
      <nav className="bg-[#201F24] rounded-b-lg flex justify-center px-10 py-6 row-end-1">
        <Image
          alt="App logo"
          className="w-[121px] h-[22px]"
          src={"/assets/images/logo-large.svg"}
          height={100}
          width={300}
          aria-label="App logo"
        />
      </nav>
      <div className=" rounded-lg row-start-1 row-end-3 flex items-center justify-center px-4">
        <div className="bg-[#ffffff] rounded-lg flex flex-col w-full py-6 px-5 gap-8">
          <h1 className="text-[32px] leading-1.2 tracking-normal font-bold">
            Login
          </h1>
          <form action="" className="space-y-4">
            <fieldset className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[12px] font-bold leading-1.5 tracking-normal text-[#696868]"
              >
                Name
              </label>
              <div className="border border-[#696868] px-5 py-2 rounded-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full"
                />
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-2 ">
              <label
                htmlFor="password"
                className="text-[#696868] font-bold text-[12px] leading-1.5 tracking-normal"
              >
                Password
              </label>
              <div className="flex w-full border border-gray-500  px-5 py-2 rounded-lg gap-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="flex-1"
                />
                <Image
                  alt={"icon show password"}
                  src="/assets/images/icon-show-password.svg"
                  width={16}
                  height={16}
                ></Image>
              </div>
            </fieldset>
            <button
              type="submit"
              className="py-5 text-center bg-[#201F24] w-full text-[#ffffff] rounded-lg text-[14px] leading-1.5 font-bold tracking-normal"
            >
              Login
            </button>
          </form>

          <p className="w-full text-center leading-1.5 tracking-normal text-[14px] text-[#696868]">
            Need create an account?{" "}
            <a
              href="/auth/sign-up"
              className="font-bold underline text-[#201F24]"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
