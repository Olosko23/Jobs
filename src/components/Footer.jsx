import React from 'react'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-white text-[25px]">
            <strong>Job</strong> Search
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and employers find the best candidate
        </p>
      </div>
      <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Company
          </span>
          <div className="grid gap-3">
              <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
          </div>
      </div>
      <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Resources
          </span>
          <div className="grid gap-3">
              <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">Support Center</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">Feedback</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">Contact Us</li>
          </div>
      </div>
      <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Support
          </span>
          <div className="grid gap-3">
              <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">Req. Demo</li>
              <li className="text-white opacity-[.7] hover:opacity-[1]">Careers</li>
          </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white">
            info@jobsearch.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram  className="bg-white p-[8px] w-[35px] h-[35px] rounded-full icon text-blueColor"/>
            <BsFacebook  className="bg-white p-[8px] w-[35px] h-[35px] rounded-full icon text-blueColor"/>
            <AiOutlineTwitter  className="bg-white p-[8px] w-[35px] h-[35px] rounded-full icon text-blueColor"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer