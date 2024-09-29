import { IoMdHome } from "react-icons/io";
import {
  SiYoutubeshorts,
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubestudio,
  SiYoutubekids,
} from "react-icons/si";
import {
  BiSolidVideos,
  BiSolidMoviePlay,
  BiMusic,
  BiPodcast,
} from "react-icons/bi";
import {
  FaAngleRight,
  FaUserTie,
  FaGripfire,
  FaLightbulb,
} from "react-icons/fa";
import { MdOutlineHistory, MdWifiTethering } from "react-icons/md";
import { LuClock2, LuFileVideo } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { AiFillLike, AiFillYoutube } from "react-icons/ai";
import { GiShoppingBag, GiHanger } from "react-icons/gi";
import { BsNewspaper, BsTrophyFill } from "react-icons/bs";
import { useSelector } from "react-redux";

// Utility function to render icon and title
const renderSidebarItem = (item, open) => (
  <div
    key={item.title}
    className={`flex ${!open ? "flex-col items-center" : "items-center space-x-4"} py-2`}
  >
    {item.icon}
    <p className={`${open ? "mt-1" : "hidden"}`}>{item.title}</p>
    <p className={`${!open ? "text-xs" : "hidden"}`}>{item.title}</p>
  </div>
);

// Sections with titles like 'You', 'Explore', 'More from YouTube'
const renderSectionTitle = (title, open) => (
  <div
    className={`border-t-2 p-2 mt-2 items-center flex hover:bg-slate-200 hover:rounded-lg ${
      open ? "" : "hidden"
    }`}
  >
    <h2 className={`mr-2 ${open ? "" : "hidden"}`}>{title}</h2>
    <FaAngleRight />
  </div>
);

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  // Sidebar sections
  const sideBarItem = [
    { icon: <IoMdHome size={22} />, title: "Home" },
    { icon: <SiYoutubeshorts size={22} />, title: "Shorts" },
    { icon: <BiSolidVideos size={22} />, title: "Subscriptions" },
  ];

  const youItems = [
    { icon: <FaUserTie size={18} />, title: "Your Channel" },
    { icon: <MdOutlineHistory size={24} />, title: "History" },
    { icon: <CgPlayList size={24} />, title: "Playlist" },
    { icon: <LuFileVideo size={20} />, title: "Video" },
    { icon: <LuClock2 size={20} />, title: "Watch Later" },
    { icon: <AiFillLike size={20} />, title: "Liked Videos" },
  ];

  const exploreItems = [
    { icon: <FaGripfire size={24} />, title: "Trending" },
    { icon: <GiShoppingBag size={20} />, title: "Shopping" },
    { icon: <BiMusic size={22} />, title: "Music" },
    { icon: <BiSolidMoviePlay size={22} />, title: "Movies" },
    { icon: <MdWifiTethering size={24} />, title: "Live" },
    { icon: <SiYoutubegaming size={24} />, title: "Gaming" },
    { icon: <BsNewspaper size={22} />, title: "News" },
    { icon: <BsTrophyFill size={22} />, title: "Sports" },
    { icon: <FaLightbulb size={20} />, title: "Courses" },
    { icon: <GiHanger size={24} />, title: "Fashion & Beauty" },
    { icon: <BiPodcast size={24} />, title: "Podcasts" },
  ];

  const moreItems = [
    { icon: <AiFillYoutube size={22} />, title: "YouTube Premium" },
    { icon: <SiYoutubestudio size={20} />, title: "YouTube Studio" },
    { icon: <SiYoutubemusic size={20} />, title: "YouTube Music" },
    { icon: <SiYoutubekids size={20} />, title: "YouTube Kids" },
  ];

  return (
    <div className="px-4 py-4 h-screen overflow-y-auto fixed bg-white shadow-md z-40 pt-16  mt-2  ">
      {/* Always show the first 3 icons */}
      {sideBarItem.map((item) => renderSidebarItem(item, open))}

      {/* Render other sections only when open */}
      {open && (
        <>
          {renderSectionTitle("You", open)}
          {youItems.map((item) => renderSidebarItem(item, open))}

          {renderSectionTitle("Explore", open)}
          {exploreItems.map((item) => renderSidebarItem(item, open))}

          {renderSectionTitle("More from YouTube", open)}
          {moreItems.map((item) => renderSidebarItem(item, open))}
        </>
      )}
    </div>
  );
};

export default Sidebar;
