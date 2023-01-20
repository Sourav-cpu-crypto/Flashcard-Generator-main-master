import React, { useState } from "react";
import './All.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const All = () => {
  const [fgroups,setfgroups]=useState();
  const data = useSelector((state) => state.fcard);
  console.log("fetchdata", data);
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid  mb-10  sm:grid-rows md:grid-cols-3 gap-1  ">
        {data.map((card) => (
          <div className="border border-grey-400 drop-shadow-lg relative 
          grid justify-items-center bg-white mt-14">
       
            <img
              src={card.file}
              className="h-20  w-15 absolute top-[-2.5rem] img"
              alt=""
            />
            <strong className="pt-12 ">{card.gname}</strong>
            <p className="text-center line-clamp-2 h-12">{card.gdef}</p>
            <p className="text-center mt-2">{card.terms.length===1?`${card.terms.length} card`:`${card.terms.length} cards`}</p>
            <Link
              to={`/groupdetails/${card.gid}/1`}
              className="btn text-center mt-5 pt-1 pb-1 font-bold mb-3 text-red-600 border-2 border-red-600 pl-4 pr-4"
            >
              View Cards
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;


