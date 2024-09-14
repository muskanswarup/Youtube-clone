import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className="top-0 flex justify-between p-2 items-start fixed w-full left-0 overflow-auto bg-white">
        {/* First div with hamburger menu and logo */}
      <div className="flex m-3 items-center space-x-4 hover:cursor-pointer">
        <GiHamburgerMenu  size={20} />
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
          />
          <button className="w-16 h-10 flex justify-center items-center border border-gray-400 p-1 rounded-r-full">
            <FaSearch  size={18}/>
          </button>
        </div>
      </div>
      {/* Third div with 3 icons */}
      <div className="flex m-3 items-center space-x-4 mr-4">
          <button className="hover:bg-slate-400 rounded-lg">
            <RiVideoAddFill size={20}/>
          </button>
          <button>
            <IoIosNotifications  size={22}/>        
          </button>
          <button >
            {/* <CgProfile  size={18}/> */}
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s" size={30} round={true}/>
          </button>
      </div>
    </div>
  );
};

export default Navbar;
