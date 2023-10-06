import { NavLink } from "react-router-dom";

interface sidebarItem {
  name: string;
  icon: JSX.Element;
  route: string;
}

export const SideBarItem = ({ name, icon, route }: sidebarItem) => {
  let style = "bg-gray-100 bg-gray-700";
  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) =>
          isActive
            ? (style =
                "bg-gray-700 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700")
            : (style =
                "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700")
        }
      >
        <a
          href="#"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {icon}
          <span className="ml-3">{name}</span>
        </a>
      </NavLink>
    </li>
  );
};
