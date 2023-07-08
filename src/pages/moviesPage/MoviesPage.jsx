import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ItemCard from "../../components/explore/ItemCard";
import {
  selectQuerySearchText,
  setSearchText,
} from "../../redux/services/query";
import appConfigService from "../../services/services/AppConfigService";
import MovieService from "../../services/services/MovieService";
import { debounce } from "../../utils/debounce";
import { filterByContentType } from "../../utils/filterByContentType";
import { filterByGenres } from "../../utils/filterByGenres";

const MoviesPage = () => {
  const searchText = useSelector(selectQuerySearchText);
  const dispatch = useDispatch();

  const [appliedContentTypes, setAppliedContentTypes] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!searchText && !appConfigService.config) {
      (async function () {
        await appConfigService.fetchData();
        console.log(appConfigService.config);
        if (!searchText)
          dispatch(setSearchText(appConfigService.config.actualSearchTheme));
      })();
    } else if (appConfigService.config.actualSearchTheme) {
      dispatch(setSearchText(appConfigService.config.actualSearchTheme));
    }
  }, []);

  const debouncedFetchData = debounce(async () => {
    if (searchText.length == 0) return;
    console.log(searchText);
    const data = await MovieService.fetchFilms(searchText);
    setData(data && data.length ? data : []);
    setLoading(false);
    // console.log(data);
  }, 300);

  useEffect(debouncedFetchData, [searchText]);

  const movies = useMemo(() => {
    if (data.length) {
      if (selectedGenres.length) {
        const filteredMovies = filterByGenres(data, selectedGenres);

        return appliedContentTypes.length == 2
          ? filteredMovies
          : filterByContentType(filteredMovies, appliedContentTypes);
      } else {
        if (appliedContentTypes.length) {
          return filterByContentType(data, appliedContentTypes);
        } else {
          return data;
        }
      }
    } else return [];
  }, [data, selectedGenres, appliedContentTypes]);

  return (
    <div className="flex flex-col w-full self-center min-h-screen">
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-2 y9:gap-5 mx-1 md:mx-8 mt-10 self-center ">
          {loading ? (
            <div className="flex justify-center mt-10 ">
              <div>
                <LoadingOutlined style={{ fontSize: 48 }} />
              </div>
              <p className="text-[26px] self-center mx-6 ">Загрузка . . . </p>
            </div>
          ) : movies.length != 0 ? (
            movies?.map((item, index) => <ItemCard item={item} key={index} />)
          ) : (
            <div>
              <p>Не найдено</p>
              <br />
              <p>
                К сожалению, введенные вами ключевые слова не найдены.
                Попробуйте проверить снова или выполните поиск по другим
                ключевым словам.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;