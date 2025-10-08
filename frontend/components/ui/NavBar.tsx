"use client";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <nav className="navbar lg:h-full transition-all duration-300">
      <div className="py-10 px-8 hidden lg:block">
        <Image
          src={"/assets/images/logo-large.svg"}
          alt="logo"
          width={121}
          height={21}
          className={`${open ? "block" : "hidden"}`}
        />
        <Image
          src={"/assets/images/logo-small.svg"}
          alt="logo"
          width={13}
          height={21}
          className={`${open ? "hidden" : "block"} mx-auto`}
        />
      </div>
      <ul className={`navbar-ul ${open ? "":"!pr-0"}`}>
        <li className="navbar-li">
          <Image
            alt="overview icon"
            src={"/assets/images/icon-nav-overview.svg"}
            width={24}
            height={24}
          />
          <span className={`menu-bar-span ${open ? "lg:!block" : "lg:!hidden"} md:!block`}>
            Overview
          </span>
        </li>
        <li className="navbar-li">
          <Image
            alt="transactions icon"
            src={"/assets/images/icon-nav-transactions.svg"}
            width={24}
            height={24}
          />
          <span className={`menu-bar-span ${open ? "lg:!block" : "lg:!hidden"} md:!block`}>
            Transactions
          </span>
        </li>
        <li className="navbar-li">
          <Image
            alt="biudgets icon"
            src={"/assets/images/icon-nav-budgets.svg"}
            width={24}
            height={24}
          />
          <span className={`menu-bar-span ${open ? "lg:!block" : "lg:!hidden"} md:!block`}>
            Budgets
          </span>
        </li>
        <li className="navbar-li">
          <Image
            alt=""
            src={"/assets/images/icon-nav-pots.svg"}
            width={24}
            height={24}
            className="size-6"
          />
          <span className={`menu-bar-span ${open ? "lg:!block" : "lg:!hidden"} md:!block`}>
            Pots
          </span>
        </li>
        <li className="navbar-li  ">
          <Image
            alt="pots icon"
            src={"/assets/images/icon-nav-recurring-bills.svg"}
            width={24}
            height={24}
          />
          <span className={`menu-bar-span ${open ? "lg:!block" : "lg:!hidden"} md:!block`}>
            Recurring bills
          </span>
        </li>
      </ul>
      <button
        className={`px-8 py-4 gap-4 text-[var(--color-gray-300-app)] hover:text-[var(--color-gray-100-app)] hidden lg:flex cursor-pointer`}
        aria-label="minimize menu"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={"/assets/images/icon-minimize-menu.svg"}
          alt="arrow left"
          width={24}
          height={24}
          className={`${open ? "rotate-0" : "rotate-180"} transition-all duration-300`}
        />
        <span className={`text-preset-3 ${open ? "block" : "hidden"}`}>
          Minimize menu
        </span>
      </button>
    </nav>
  );
};

export default NavBar;
