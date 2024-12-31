import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useEffect } from "react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const herosection = window.location.pathname === "/hero";

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">ChatVibe</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {herosection && (
              <>
                <a
                  href="#services"
                  className="btn btn-sm gap-2 transition-colors smooth-scroll duration-300"
                >
                  <span>Services</span>
                </a>
              </>
            )}
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>
            {herosection && (
              <Link
                to="/signup"
                className="btn btn-sm bg-primary text-black hover:bg-base-300 hover:text-white gap-2 transition-colors"
              >
                <span>Sign Up</span>
              </Link>
            )}

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;