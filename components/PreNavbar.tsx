'use client'

import { Button } from "./ui/button";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5"; 
import { useRouter } from 'next/navigation'; 

export default function PreNavbar() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); 
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-12 bg-lightMain justify-evenly items-center text-white p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex gap-3 items-center">
        <IoHomeSharp />
        PM Shri GSSS Nilokheri, Karna
      </div>
      <div className="flex gap-3 items-center">
        <BsFillSendFill />
        <b>Email</b>
        sarabjeet.lamba32@gmail.com
      </div>
      <div className="flex gap-3 items-center">
        <FaPhoneAlt />
        <b>Call</b>
        9811064541
      </div>
      <div>
        <Button variant='login' size='sm' onClick={handleLoginClick}>Login</Button>
      </div>
    </div>
  )
}
