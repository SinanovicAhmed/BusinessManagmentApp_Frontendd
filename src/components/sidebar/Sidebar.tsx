import { SideBarItem } from "./SidebarItem";
import { RiDashboardFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { FaTruck, FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { BiConversation } from "react-icons/bi";
import { Link } from "react-router-dom";

import appLogo from "../../assets/images/app-logo.png";

export const Sidebar = () => {
  return (
    <aside className="w-64 sticky top-0 left-0 h-screen" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto w-[200px] rounded bg-gray-50 dark:bg-gray-800 h-screen">
        <Link to="/managment/dashboard" className="flex items-center mb-5">
          <img src={appLogo} className="h-12 mr-3" alt="BManageX" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            BManageX
          </span>
        </Link>
        <ul className="space-y-2 relative">
          <SideBarItem name="Dashboard" route="dashboard" icon={<RiDashboardFill />} />
          <SideBarItem name="Suppliers" route="suppliers" icon={<FaTruck />} />
          <SideBarItem name="Orders" route="orders" icon={<FaClipboardList />} />
          <SideBarItem name="Materials" route="materials" icon={<GiMining />} />
          <SideBarItem name="Products" route="products" icon={<FaBoxOpen />} />
          <SideBarItem name="Employees" route="employees" icon={<FaUsers />} />
          <SideBarItem name="Suggestions" route="suggestions" icon={<BiConversation />} />
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <SideBarItem name="Logout" route="/" icon={<MdLogout />} />
        </ul>
      </div>
    </aside>
  );
};
