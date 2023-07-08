import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  selectQuerySearchText,
  setSearchText,
} from "../../redux/services/query";
import { styles } from "../../styles/styles";

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);

  const searchText = useSelector(selectQuerySearchText);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText === "") {
      return setIsSearch(false);
    }
    if (searchText !== "" || searchText !== " ") {
      return setIsSearch(true);
    }
  }, [searchText]);

  useEffect(() => {
    if (isSearch === false) dispatch(setSearchText(""));
  }, [isSearch]);

  return (
    <div className="relative flex flex-col pt-4 md:-pt-4  focus:outline-none focus:ring focus:ring-violet-300  z-50 ">
      <div className="flex z-50">
        <input
          onClick={() => setIsSearch(!isSearch)}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
          className={`${styles.searchInput} font-extrabold`}
          type="text"
          placeholder="Поиск фильмов . . ."
          value={searchText}
        />
        <RiSearch2Line className={`${styles.searchIcn}`} />
      </div>
      <div
        className={`origin-top ${
          (!isSearch ||
            searchText === "" ||
            searchText === " " ||
            searchText === null) &&
          "scale-y-0"
        } duration-500 absolute  top-12  w-full z-50 `}
      ></div>
      {/* <div className="dark:bg-[#29263b] bg-white mx-3  mt-1 rounded-b-lg ">
        {data?.results?.slice(0, 4).map((result, index) => (
          <SearchItem
            result={result}
            key={index}
            search={isSearch}
            setSearch={setIsSearch}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Search;
