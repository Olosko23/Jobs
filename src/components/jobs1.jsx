import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "df99ef155emshea78dab7a0f9183p18689djsn969f4f85aba7",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const url =
    ("https://jsearch.p.rapidapi.com/serach?query=Python%20developer%2C%20USA&num_pages=2",
    options);

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      const response = await fetch(url);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getJobs();
  }, []);

  const Loading = () => {
    return <div>Loading... Please Wait</div>;
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {data.map(
            ({ id, employer, logo, title, desc, remote, type, apply, postedAt }) => {
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
                      <BiTimeFive /> {postedAt}
                    </span>
                  </span>
                  <h6 className="text-[#ccc]">
                    {city}, {country}
                  </h6>
                  {remote ? <h6 className="text-[#ccc]">Remote</h6> : null}
                  <h6 className="text-[#ccc]">{type}</h6>
                  <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                    {desc}
                  </p>
                  <div className="company flex items-center gap-2">
                    <img src={logo} alt="Company Logo" className="w-[10%]" />
                    <span className="text-[14px] py-[1rem] block group-hover:text-white">
                      {employer}
                    </span>
                  </div>
                  <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                    <Link to='/jobs/:id'>Apply Here</Link>
                  </button>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Jobs;
