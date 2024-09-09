import { IoMdHome} from "react-icons/io";
import { SiYoutubeshorts, SiYoutubegaming, SiYoutubemusic, SiYoutubestudio, SiYoutubekids } from "react-icons/si";
import { BiSolidVideos, BiSolidMoviePlay, BiMusic, BiPodcast } from "react-icons/bi";
import { FaAngleRight, FaUserTie, FaGripfire, FaLightbulb } from "react-icons/fa";
import { MdOutlineHistory, MdWifiTethering} from "react-icons/md";
import { LuClock2, LuFileVideo } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { AiFillLike, AiFillYoutube } from "react-icons/ai";
import { GiShoppingBag, GiHanger } from "react-icons/gi";
import { BsNewspaper, BsTrophyFill } from "react-icons/bs";



const Sidebar = () => {
  const sideBarItem = [
    {
      icon: <IoMdHome size={22} />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts size={22} />,
      title: "Shorts",
    },
    {
      icon: <BiSolidVideos size={22} />,
      title: "Subscriptions",
    },
  ];

  const youItems = [
    {
      icon: <FaUserTie size={18} />,
      title: "Your Channel",
    },
    {
      icon: <MdOutlineHistory size={24} />,
      title: "History",
    },
    {
      icon: <CgPlayList size={24} />,
      title: "Playlist",
    },
    {
      icon: <LuFileVideo size={20} />,
      title: "Video",
    },
    {
      icon: <LuClock2 size={20} />,
      title: "Watch Later",
    },
    {
      icon: <AiFillLike size={20} />,
      title: "Liked Videos",
    },
  ];

  const exploreItems = [
    {
      icon: <FaGripfire size={24}/>,
      title: "Trending"
    },
    {
      icon: <GiShoppingBag size={20}/>,
      title: "Shopping"
    },
    {
      icon: <BiMusic size={22}/>,
      title: "Music"
    },
    {
      icon: <BiSolidMoviePlay size={22}/>,
      title: "Movies"
    },
    {
      icon: <MdWifiTethering size={24}/>,
      title: "Live"
    },
    {
      icon: <SiYoutubegaming size={24}/>,
      title: "Gaming"
    },
    {
      icon: <BsNewspaper size={22}/>,
      title: "News"
    },
    {
      icon: <BsTrophyFill size={22}/>,
      title: "Sports"
    },
    {
      icon: <FaLightbulb size={20}/>,
      title: "Courses"
    },
    {
      icon: <GiHanger size={24}/>,
      title: "Fashion & Beauty"
    },
    {
      icon: <BiPodcast size={24}/>,
      title: "Podcasts"
    }
  ];

  const moreItems = [
    {
      icon: <AiFillYoutube size={22}/>,
      title: "YouTube Premium"
    },
    {
      icon: <SiYoutubestudio size={20}/>,
      title: "YouTube Studio"
    },
    {
      icon: <SiYoutubemusic size={20}/>,
      title: "YouTube Music"
    },
    {
      icon: <SiYoutubekids size={20}/>,
      title: "YouTube Kids"
    }
  ];

  return (
    <div className="border border-gray-700 px-4 py-4 h-screen overflow-y-auto pt-16">
      {/* First 3 icons */}
      {sideBarItem.map((item, index) => {
        return (
          <div key={index} className="flex items-center space-x-4 py-2">
            {item.icon}
            <p>{item.title}</p>
          </div>
        );
      })}

      {/* YOU part */}
      <div className="border-t-2 p-2 mt-2 items-center flex hover:bg-slate-200 hover:rounded-lg">
        <h2 className="mr-2">You</h2>
        <FaAngleRight />
      </div>

      {youItems.map((item, index) => {
        return (
          <div key={index} className="flex items-center space-x-4 py-2">
            {item.icon}
            <p>{item.title}</p>
          </div>
        );
      })}
   
      {/* Explore options */}
      <div className="border-t-2 p-2 mt-2 items-center flex hover:bg-slate-200 hover:rounded-lg">
        <h2 className="mr-2">Explore</h2>
      </div>

      {exploreItems.map((item, index) => {
        return (
          <div key={index} className="flex items-center space-x-4 py-2">
            {item.icon}
            <p>{item.title}</p>
          </div>
        );
      })}

      {/* More from Yt */}
      <div className="border-t-2 p-2 mt-2 items-center flex hover:bg-slate-200 hover:rounded-lg">
        <h2 className="mr-2">More from YouTube</h2>
      </div>

      {moreItems.map((item, index) => {
        return (
          <div key={index} className="flex items-center space-x-4 py-2">
            {item.icon}
            <p>{item.title}</p>
          </div>
        );
      })}


      {/* Remaining 4 icons */}
      
    </div>

    
  );
};

export default Sidebar;
