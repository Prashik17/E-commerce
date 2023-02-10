import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
  const [nav , setNav ] = useState(false)

  const handleNav = ()=>{
    setNav(!nav)
  }
  return (
    <>
    <nav className=" bg-gray-400 bg-fixed">
      <div className=" flex items-center font-medium justify-around">
        <div className=" z-50 p-5 md:w-auto w-full flex justify-between">
         
          <div onClick={handleNav} className='block md:hidden text-black'>
          {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
            
        </div>
        </div>
        <ul className="pr-[27%] md:flex hidden uppercase  gap-8 font-sans text-black font-bold drop-shadow-lg">
          <li>
            <Link to="/" className=" py-7 px-3 inline-block hover:scale-105 duration-300 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/LineGraph" className="py-7 px-3 inline-block hover:scale-105 duration-300">
              LineGraph
            </Link>
          </li>
          <li>
            <Link to="/Barchart" className="py-7 px-3 inline-block hover:scale-105 duration-300">
              BarChart
            </Link>
          </li> 
        </ul>
        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white text-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 cursor-pointer
        duration-500 ${nav ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/LineGraph" className="py-7 px-3 inline-block ">
            LineGraph
            </Link>
          </li>
          <li>
            <Link to="/BarChart" className="py-7 px-3 inline-block ">
            BarChart
            </Link>
          </li> 
          
        
        </ul>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;