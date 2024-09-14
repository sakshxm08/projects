import { GoHome } from "react-icons/go";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/auth/useLogout";

const Sidebar = () => {
  const { logout } = useLogout();
  const icons = [
    { url: "/dashboard", Icon: GoHome, exact: true },
    { url: "/dashboard/add", Icon: AiOutlinePlus },
    { url: "/dashboard/edit", Icon: FiEdit3 },
  ];

  return (
    <div className="fixed left-20 top-1/2 -translate-y-1/2 border border-white/20 rounded-full">
      <div className="flex flex-col">
        {icons.map((icon, index) => (
          <NavLink
            to={icon.url}
            key={index}
            end={icon.exact}
            className={({ isActive }) =>
              `p-6 rounded-full transition-all hover:bg-white/20 ${
                isActive ? "text-yellow-400" : icon?.color || "text-white"
              }`
            }
          >
            <icon.Icon size={24} />
          </NavLink>
        ))}
        <button
          onClick={logout}
          className="p-6 rounded-full transition-all hover:bg-white/20 text-red-500"
        >
          <TbLogout2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
