import { SideBarItem } from "./SidebarItem";
import { RiDashboardFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { FaTruck, FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { BiConversation, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import appLogo from "../../assets/images/app-logo.png";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/api/userAPI";
import { toast } from "react-toastify";
import axios from "axios";
import { parseCookie } from "../../helpers/cookieParser";

export const Sidebar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const parsed_user_data = parseCookie();
  const role = parsed_user_data?.role;

  const { refetch } = useQuery("logout", logoutUser, {
    refetchOnWindowFocus: false,
    enabled: false,

    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/");
      toast.success("You have successfully logged out.");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error);
      }
    },
  });

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
          {role === "ADMIN" && <SideBarItem name="Dashboard" route="dashboard" icon={<RiDashboardFill />} />}
          <SideBarItem name="Suppliers" route="suppliers" icon={<FaTruck />} />
          <SideBarItem name="Orders" route="orders" icon={<FaClipboardList />} />
          <SideBarItem name="Materials" route="materials" icon={<GiMining />} />
          <SideBarItem name="Products" route="products" icon={<FaBoxOpen />} />
          {role === "ADMIN" && <SideBarItem name="Employees" route="employees" icon={<FaUsers />} />}
          <SideBarItem name="Suggestions" route="suggestions" icon={<BiConversation />} />
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <button
              onClick={() => refetch()}
              className=" w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                {<BiLogOut />}
                <span className="ml-3">Logout</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
