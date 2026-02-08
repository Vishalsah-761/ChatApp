import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, HomeIcon, ShipWheelIcon, UsersIcon } from "lucide-react";
import { DEFAULT_AVATAR } from "../constants/avatar";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();

  return (
    <aside className="w-64 bg-base-200 border-r hidden lg:flex flex-col h-screen sticky top-0">
      <div className="p-5 border-b">
        <Link to="/" className="flex items-center gap-2">
          <ShipWheelIcon className="size-9 text-primary" />
          <span className="text-3xl font-bold font-mono bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Chatify
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Link to="/" className={`btn btn-ghost w-full ${location.pathname === "/" && "btn-active"}`}>
          <HomeIcon className="size-5 opacity-70" /> Home
        </Link>

        <Link to="/friends" className={`btn btn-ghost w-full ${location.pathname === "/friends" && "btn-active"}`}>
          <UsersIcon className="size-5 opacity-70" /> Friends
        </Link>

        <Link to="/notifications" className={`btn btn-ghost w-full ${location.pathname === "/notifications" && "btn-active"}`}>
          <BellIcon className="size-5 opacity-70" /> Notifications
        </Link>
      </nav>

      <div className="p-4 border-t flex items-center gap-3">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={authUser?.profilePic || DEFAULT_AVATAR} />
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm">{authUser?.fullName}</p>
          <p className="text-xs text-success">● Online</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;