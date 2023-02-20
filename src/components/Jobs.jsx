import React from 'react'
import {BiTimeFive} from 'react-icons/bi';
import web1 from '../assets/spotify-1-logo-svgrepo-com.svg';
import web2 from '../assets/airbnb-2-logo-svgrepo-com.svg';
import web3 from '../assets/bmw-logo-svgrepo-com.svg';
import web4 from '../assets/microsoft-logo-svgrepo-com.svg';
import web5 from '../assets/slack-logo-svgrepo-com.svg';
import web6 from '../assets/twitter-3-logo-svgrepo-com.svg';

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">Web Developer</h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> Now
              </span>
          </span>
          <h6 className="text-[#ccc]">Canada</h6>

          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing wlit. Corrupti, laboriosam!
          </p>
          <div className="company flex items-center gap-2">
            <img src={web1} alt="Company Logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">Novac Linus Co.</span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
        </div>
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">Web Developer</h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> Now
              </span>
          </span>
          <h6 className="text-[#ccc]">Canada</h6>

          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing wlit. Corrupti, laboriosam!
          </p>
          <div className="company flex items-center gap-2">
            <img src={web2} alt="Company Logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">Novac Linus Co.</span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
        </div>
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">Web Developer</h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> Now
              </span>
          </span>
          <h6 className="text-[#ccc]">Canada</h6>

          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing wlit. Corrupti, laboriosam!
          </p>
          <div className="company flex items-center gap-2">
            <img src={web3} alt="Company Logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">Novac Linus Co.</span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
        </div>
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">Web Developer</h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> Now
              </span>
          </span>
          <h6 className="text-[#ccc]">Canada</h6>

          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing wlit. Corrupti, laboriosam!
          </p>
          <div className="company flex items-center gap-2">
            <img src={web4} alt="Company Logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">Novac Linus Co.</span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
        </div>
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">Web Developer</h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> Now
              </span>
          </span>
          <h6 className="text-[#ccc]">Canada</h6>

          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing wlit. Corrupti, laboriosam!
          </p>
          <div className="company flex items-center gap-2">
            <img src={web5} alt="Company Logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">Novac Linus Co.</span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
        </div>
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">Web Developer</h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> Now
              </span>
          </span>
          <h6 className="text-[#ccc]">Canada</h6>

          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing wlit. Corrupti, laboriosam!
          </p>
          <div className="company flex items-center gap-2">
            <img src={web6} alt="Company Logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">Novac Linus Co.</span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Jobs