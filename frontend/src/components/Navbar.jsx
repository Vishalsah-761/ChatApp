import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import { DEFAULT_AVATAR } from "../constants/avatar";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-end">

        {isChatPage && (
          <Link to="/" className="flex items-center gap-2 mr-auto">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Chatify
            </span>
          </Link>
        )}

        <Link to="/notifications" className="btn btn-ghost btn-circle">
          <BellIcon className="h-6 w-6 opacity-70" />
        </Link>

        <ThemeSelector />

        <div className="avatar">
          <div className="w-9 rounded-full">
            <img
              src={authUser?.profilePic || DEFAULT_AVATAR}
              alt="User avatar"
            />
          </div>
        </div>

        <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
          <LogOutIcon className="h-6 w-6 opacity-70" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;