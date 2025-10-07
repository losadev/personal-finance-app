import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar lg:h-full">
      <div className="py-10 px-8 hidden lg:block">
        <Image
          src={"/assets/images/logo-large.svg"}
          alt="logo"
          width={121}
          height={21}
        />
      </div>
      <ul className=" navbar-ul">
        <li className="navbar-li">
          <Image
            alt=""
            src={"/assets/images/icon-nav-overview.svg"}
            width={24}
            height={24}
          />
          <span className="menu-bar-span">Overview</span>
        </li>
        <li className="navbar-li">
          <Image
            alt=""
            src={"/assets/images/icon-nav-transactions.svg"}
            width={24}
            height={24}
          />
          <span className="menu-bar-span">Transactions</span>
        </li>
        <li className="navbar-li">
          <Image
            alt=""
            src={"/assets/images/icon-nav-budgets.svg"}
            width={24}
            height={24}
          />
          <span className="menu-bar-span">Budgets</span>
        </li>
        <li className="navbar-li">
          <Image
            alt=""
            src={"/assets/images/icon-nav-pots.svg"}
            width={24}
            height={24}
            className="size-6"
          />
          <span>Pots</span>
        </li>
        <li className="navbar-li">
          <Image
            alt=""
            src={"/assets/images/icon-nav-recurring-bills.svg"}
            width={24}
            height={24}
          />
          <span className="menu-bar-span">Recurring bills</span>
        </li>
      </ul>
      <button className="px-8 py-4 gap-4 text-[var(--color-gray-300-app)] hover:text-[var(--color-gray-100-app)] hidden lg:flex">
        <Image
          src={"/assets/images/icon-minimize-menu.svg"}
          alt="arrow left"
          width={24}
          height={24}
        />
        <span className="text-preset-3 ">Minimize menu</span>
      </button>
    </nav>
  );
};

export default NavBar;
