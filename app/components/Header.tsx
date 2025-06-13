"use client"
import React from 'react'
import Image from 'next/image'
import { CiSearch} from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react"

function Header() {
    const { data: session } = useSession()
  return (
    <div className="flex gap-3 items-center p-6">
      <Image src="/logo.png" alt="logo" width={50} height={50} className='cursor-pointer p-2 rounded-full hover:bg-gray-300'></Image>
      <button className='bg-black text-white p-2 px-4 rounded-full cursor-pointer'>Home</button>
      <button className='font-semibold p-2 px-4 cursor-pointer'>Create</button>
      <div className="bg-[#e9e9e9] flex p-3 gap-4 items-center rounded-full w-full">
            <CiSearch className='text-[25px] text-gray-500'/>
            <input type="text" className="bg-transparent text-gray-500 border-0" placeholder='Search' />
           
      </div>
       <CiBellOn  className='text-[40px] text-gray-500' />
            <IoChatboxEllipsesOutline   className='text-[40px] text-gray-500'/>
            {session?.user?
            <Image src={session?.user?.image!} alt='user-image' width={50} height={50} className='cursor-pointer p-2 rounded-full hover:bg-gray-300'></Image>:
            <button onClick={() => signIn()} className='font-semibold p-2 px-4 cursor-pointer w-30'>Log in</button>
            }
    </div>
  )
}

export default Header

