import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link, useLocation } from "react-router-dom";
import logoImageLight from "../../assets/logo.jpg";
import logoImageDark from "../../assets/logoImage.png";

import Search from "../../components/navbar/Search";
import { moviesContentTypes, moviesGenres } from "../../data/movieData";
import {
  selectQueryAppliedContentTypes,
  selectQuerySelectedGenres,
  setAppliedContentTypes,
  setSelectedGenres,
} from "../../redux/services/query";

const Navbar = ({ mode, setMode }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const appliedContentTypes = useSelector(selectQueryAppliedContentTypes);
  const selectedGenres = useSelector(selectQuerySelectedGenres);

  const windowWidth = window.innerWidth;

  return (
    <div>
      <div className="flex justify-between pt-3 mx-3 md:mx-7 ">
        <div className="flex self-center justify-center ">
          <div className="self-center font-extrabold sm:mx-3 mt-4 flex min-w-[85px] sm:min-w-[85px] ">
            <Link to="/">
              <img
                src={mode == "dark" ? logoImageDark : logoImageLight}
                alt="logoImage"
                className="w-[85px] h-[85px] mx-1"
              />
            </Link>
          </div>
        </div>
        {location.pathname === "/" && (
          <div
            className={`flex flex-wrap windowWidth < ${768 && "justify-end"}`}
          >
            <div
              className={`flex max-sm:w-full items-center  ${
                windowWidth < 768 ? "ml-auto" : " ml-[-90px]"
              } mr-31`}
            >
              {moviesContentTypes.map((type) => (
                <p
                  key={type}
                  onClick={() => {
                    if (appliedContentTypes.indexOf(type) == -1) {
                      dispatch(
                        setAppliedContentTypes(
                          appliedContentTypes.concat([type])
                        )
                      );
                    } else {
                      const newAppliedContentTypes = appliedContentTypes.filter(
                        (oldType) => oldType != type
                      );

                      dispatch(setAppliedContentTypes(newAppliedContentTypes));
                    }
                  }}
                  className={`mx-2 bg-transparent border ${
                    appliedContentTypes.indexOf(type) == -1
                      ? "border-textPDark"
                      : "border-btn"
                  } border-opacity-70 border-2 px-3 rounded-2xl h-[30px] placeholder:text-textPDark outline-none font-extrabold cursor-pointer`}
                >
                  {type}
                </p>
              ))}
            </div>

            <Search />
          </div>
        )}

        <div className="self-center  z-20 hidden lg:flex ">
          <div className="self-center mx-2  ">
            <DarkModeToggle
              mode={mode}
              dark="Светлая"
              light="Тёмная"
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
      {location.pathname === "/" && (
        <div className="flex mt-2 flex-wrap justify-center items-center">
          {moviesGenres.map(({ label: genre }) => (
            <p
              key={genre}
              onClick={() => {
                if (selectedGenres.indexOf(genre) == -1) {
                  dispatch(setSelectedGenres(selectedGenres.concat([genre])));
                } else {
                  const newSelectedGenres = selectedGenres.filter(
                    (oldGenre) => oldGenre != genre
                  );

                  dispatch(setSelectedGenres(newSelectedGenres));
                }
              }}
              className={`mx-2 bg-transparent mb-3 border ${
                selectedGenres.indexOf(genre) == -1
                  ? "border-textPDark"
                  : "border-btn"
              } border-opacity-70 border-2 px-3 rounded-2xl h-[30px] placeholder:text-textPDark outline-none font-extrabold cursor-pointer`}
            >
              {genre}
            </p>
          ))}
        </div>
      )}
      {windowWidth < 1024 && (
        <div className="flex justify-end">
          <DarkModeToggle
            mode={mode}
            dark="Светлая"
            light="Тёмная"
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
      )}
    </div>
  );
};

export default Navbar;
