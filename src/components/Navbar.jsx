import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu hidden md:flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
      </div>
      <div onClick={() => setNav(!nav)} className="pr-2 z-10 cursor-pointer flex nd:hidden text-blueColor">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 right-0 gap-8">
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">Companies</li>
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">Contact</li>
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] px-4 cursor-pointer capitalize py-6 text-xl bg-white opacity-50 hover:text-blueColor">Register</li>
      </div>
      )}
    </div>
  )
}

export default Navbar