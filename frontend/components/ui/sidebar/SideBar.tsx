import Image from 'next/image'
import React from 'react'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <nav className='bg-[var(--color-gray-900-app)] rounded-r-lg flex flex-col gap-6 pb-6'>
        <div className='py-10 px-8'>
            <Image src={"/assets/images/logo-large.svg"} alt='logo' width={121} height={21}/>
        </div>
        <ul className='flex flex-col flex-1 text-[var(--color-gray-300-app)] text-preset-3 pr-6'>
            <li className='menu-side-bar'>
                <Image alt='' src={"/assets/images/icon-nav-overview.svg"} width={24} height={24}/> 
                Overview
            </li>
            <li className='menu-side-bar'>
                <Image alt='' src={"/assets/images/icon-nav-transactions.svg"} width={24} height={24}/>
                Transactions
            </li>
            <li className='menu-side-bar'>
                <Image alt='' src={"/assets/images/icon-nav-budgets.svg"} width={24} height={24}/>
                Budgets
            </li>
            <li className='menu-side-bar'>
                <Image alt='' src={"/assets/images/icon-nav-pots.svg"} width={24} height={24}/>
                Pots
            </li>
            <li className='menu-side-bar'>
                <Image alt='' src={"/assets/images/icon-nav-recurring-bills.svg"} width={24} height={24}/>
                Recurring bills
            </li>
        </ul>
        <button className='px-8 py-4 flex gap-4 text-[var(--color-gray-300-app)] hover:text-[var(--color-gray-100-app)]'>
            <Image src={"/assets/images/icon-minimize-menu.svg"} alt='arrow left' width={24} height={24}/>
            <span className='text-preset-3 '>Minimize menu</span>
        </button>
    </nav>
  )
}

export default SideBar