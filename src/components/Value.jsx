import React from "react";
import {FcBusinessman} from 'react-icons/fc';
import {FaPeopleArrows} from 'react-icons/fa';
import {MdOutlineDetails} from 'react-icons/md';

const Value = () => {
  return (
    <div name="value" className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block ">
        The value that holds us true to our account
      </h1>
      <div className="grid gap-[10rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f1f1fa] h-[40px] w-[40px] flex items-center justify-center">
              <FcBusinessman size={30} className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#f3e1ef] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f8f3f7] h-[40px] w-[40px] flex items-center justify-center">
              <FaPeopleArrows size={30} className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Detail
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <MdOutlineDetails size={30} className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Value
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            We work on the basis of creating trust which can be nurtured through authenticity and transparency
          </p>
        </div>
      </div>
      <div className="card mt-[2rem] flex flex-col gap-2 justify-between md:flex-col bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">Ready to switch careers</h1>
          <h2 className="text-textColor text-[25px] font-bold">Let's Get Started</h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">Get Started</button>
      </div>
    </div>
  );
};

export default Value;
