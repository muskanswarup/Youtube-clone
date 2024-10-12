import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import Avatar from 'react-avatar';
import {useDispatch} from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
      dispatch(toggleSidebar());
  }
    
  // const [searchTerm, setSearchTerm] = useState("");
  // const navigate = useNavigate();
  // const handleSearch = ()=>{
  //   console.log(searchTerm);
  //   if(searchTerm.trim()){
  //     navigate(`/results?search=${searchTerm}`);
  //   }
  // }


  return (
    <div className="flex justify-between items-center p-2 fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        {/* First div with hamburger menu and logo */}
      <div className="flex items-center space-x-4 hover:cursor-pointer ml-4">
        <GiHamburgerMenu onClick={toggleHandler} size={20} />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png?20170829160812"
          alt="youtube_logo"
          width={"115px"}
        ></img>
      </div>
      {/* Second div with search bar  */}
      <div className="flex-1 m-3 flex justify-center">
        <div className="flex items-center w-full max-w-lg">
          <input
            placeholder="Search"
            className="w-full h-10 pl-4 border border-gray-400 outline-none rounded-l-full text-sm placeholder-gray-500"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
          // onClick={handleSearch}
           className="w-16 h-10 flex justify-center items-center border border-gray-400 p-1 rounded-r-full">
            <FaSearch  size={18}/>
          </button>
        </div>
      </div>
      {/* Third div with 3 icons */}
      <div className="hidden md:flex m-3 items-center space-x-4 mr-4 ">
          <button className="hover:bg-slate-400 rounded-lg p-1">
            <RiVideoAddFill size={20}/>
          </button>
          <button>
            <IoIosNotifications  size={24}/>        
          </button>
          <button >
            {/* <CgProfile  size={18}/> */}
            <Avatar src={`https://avatarfiles.alphacoders.com/231/231277.jpg`} size={24} round={true}/>
          </button>
      </div>
    </div>
  );
};

export default Navbar;
