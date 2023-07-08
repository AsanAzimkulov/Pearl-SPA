import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import NavBar from "./components/navbar/Navbar";
import MoviePage from "./pages/moviePage/MoviePage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import "./styles/globalStyles.css";
import { Provider } from 'react-redux'
import {store} from "./redux/store";
const App = () => {
  const [mode, setMode] = useState("dark");


  useEffect(() => {
    if (mode === "light") {
      return document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop smooth />
        {/* <div

          className={` fixed z-40 w-full h-full bg-black  backdrop-blur-sm dark:bg-opacity-60 bg-opacity-25 `}
        /> */}
        {/* <div
          className={` fixed z-[51] w-full h-full bg-black lg:hidden backdrop-blur-sm dark:bg-opacity-70 bg-opacity-25 `}
        /> */}
        <div
          className={`dark:text-textDark text-textLight   
         ${mode === "dark" ? "gradient-06" : "lightTheme"} `}
        >
          <NavBar
            setMode={setMode}
            mode={mode}
          />
          <div className="flex">
            <div className=" w-full flex flex-col  ">
              <Switch>
                <Route path={"/"} exact component={() => <MoviesPage />} />
                <Route path={"/watch"} exact component={() => <MoviePage />} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
