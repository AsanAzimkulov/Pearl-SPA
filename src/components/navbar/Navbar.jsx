import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../../assets/logoImage.png";
import Search from "../../components/navbar/Search";

const Navbar = ({ mode, setMode }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex justify-between pt-3 mx-3 md:mx-7 ">
      <div className="flex self-center justify-center ">
        <div className="self-center font-extrabold sm:mx-3 mt-4 flex min-w-[85px] sm:min-w-[85px] ">
          <Link to="/">
            <img
              src={logoImage}
              alt="logoImage"
              className="w-[85px] h-[85px] mx-1"
            />
          </Link>
        </div>
      </div>
      {location.pathname === "/" && <Search />}
      <div className="self-center  z-20 hidden lg:flex ">
        <div className="self-center mx-2  ">
          <DarkModeToggle
            mode={mode}
            dark="dark"
            light="light"
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
              setMode(mode);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
