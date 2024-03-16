import { navItems } from "@/app/configs/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className='w-full hidden md:flex items-center'>
      {navItems.map((item: NavItems, index: number) => (
        <Link href='/' key={index} className='px-5 text-lg'>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
