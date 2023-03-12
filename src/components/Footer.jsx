import React from 'react';
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

const Footer = () => {
  const dets = [
    {
      id:1,
      title: 'About Us'
    },
    {
      id:2,
      title: 'Features'
    },
    {
      id:3,
      title: 'News'
    },
    {
      id:4,
      title: 'FAQ'
    },
  ]
  const resources = [
    {
      id:1,
      title: 'Account'
    },
    {
      id:2,
      title: 'Support Center'
    },
    {
      id:3,
      title: 'Feedback'
    },
    {
      id:4,
      title: 'Contact Us'
    },
  ]
  const supports = [
    {
      id:1,
      title:'Events'
    },
    {
      id:2,
      title:'Promo'
    },
    {
      id:3,
      title:'Careers'
    },
    {
      id:4,
      title:'Req. Demo'
    },
  ]
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-4 flex flex-col md:flex-row m-auto items-center justify-center">
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
      <div className="flex md:grid-cols-3 gap-10 mb-3">
      <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Company
          </span>
          <div className="grid gap-3">
            {
              dets.map(({id,title}) => (
                <li key={id} className="text-white opacity-[.7] hover:opacity-[1]">{title}</li>
              ))
            }
          </div>
      </div>
      <div className="grid">
          <span className="text-[18px] font-semibold pb-[1.5rem] text-white">Resources
          </span>
          <div className="grid gap-3">
            {
            resources.map(({id,title}) =>(
              <li key={id} className="text-white opacity-[.7] hover:opacity-[1]">{title}</li>

            ))
            }
          </div>
      </div>
      <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Support
          </span>
          <div className="grid gap-3">
            {
              supports.map(({id,title}) => (
                <li key={id} className="text-white opacity-[.7] hover:opacity-[1]">{title}</li>
              ))
            }
          </div>
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