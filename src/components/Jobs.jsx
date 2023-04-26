import React from "react";
import { BiTimeFive } from "react-icons/bi";
import web1 from "../assets/spotify-1-logo-svgrepo-com.svg";
import web2 from "../assets/airbnb-2-logo-svgrepo-com.svg";
import web3 from "../assets/bmw-logo-svgrepo-com.svg";
import web4 from "../assets/microsoft-logo-svgrepo-com.svg";
import web5 from "../assets/slack-logo-svgrepo-com.svg";
import web6 from "../assets/twitter-3-logo-svgrepo-com.svg";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Web Developer",
      country: "Canada",
      time: "Now",
      image: web1,
      company: "Nocav Inc",
    },
    {
      id: 2,
      title: "UI/UX Developer",
      country: "Kenya",
      time: "2hrs",
      image: web2,
      company: "Gateway Limited",
    },
    {
      id: 3,
      title: "QA Engineer",
      country: "Finland",
      time: "1 day",
      image: web3,
      company: "Indian Corp",
    },
    {
      id: 4,
      title: "Fronted Developer - React",
      country: "South Africa",
      time: "1 day",
      image: web4,
      company: "Martizburg Orient Enterprise",
    },
    {
      id: 5,
      title: "SR Engineer/ DevOps",
      country: "Estonia",
      time: "12 hours",
      image: web5,
      company: "Nokia Inc",
    },
    {
      id: 6,
      title: "Senior Fullstack Developer",
      country: "Uruguay",
      time: "2 hours",
      image: web6,
      company: "Messioan Enterprise",
    },
  ];
  return (
    <div>
      <div
        name="jobs"
        className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10"
      >
        {jobs.map(({ id, title, country, time, image, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{country}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing wlit.
                Corrupti, laboriosam!.
              </p>
              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-blueColor">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
