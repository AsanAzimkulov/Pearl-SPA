import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { withRouter } from "react-router-dom";
import horizontalBannerMobileFirst from "../../assets/LEADS/turbozaim/20230531 ban-sum-1080x607.jpg";
import horizontalBannerPcFirst from "../../assets/LEADS/turbozaim/20230531 ban-sum-1312x160.jpg";
import horizontalBannerMobileSecond from "../../assets/LEADS/webbankir/20230627 marked LjN8KBpPh v3 1080x607 1ed8b3b523fe29fca2bf14eb502d7814.png";
import horizontalBannerPcSecond from "../../assets/LEADS/webbankir/20230627 marked LjN8KDqHH v2 1312x160 9ecacbb71623611991e533f8b89b8d64.png";
import Footer from "../../components/layout/Footer";

import { moviesContentTypes } from "../../data/movieData";
import { useQuery } from "../../hooks/useQuery";
import advertisementService from "../../services/services/AdvertisementService";
import appConfigService from "../../services/services/AppConfigService";
import MovieService from "../../services/services/MovieService";
import { formatList } from "../../utils/formatList";
import { formatTimeToMinutes } from "../../utils/formatTimeToMinutes";

const MoviePage = (props) => {
  const [item, setItem] = useState(
    props.location.state && props.location.state.item
  );

  if (item) window.tools = { kp: item["kinopoisk_id"] };

  const [error, setError] = useState(null);

  const query = useQuery();

  useEffect(() => {
    window.scrollTo(0, 0);

    (async function () {
      if (item) return;

      const filmCode = query.get("filmCode");

      if (!appConfigService.config) await appConfigService.initPromise;

      const kpId = appConfigService.config.filmCodeKpIdPairs[filmCode];
      const film = await MovieService.fetchFilmByKp(kpId);
      if (!film) setError("Вы ввели неверный код");
      setItem(film);
    })();
  }, []);

  return (
    <div>
      {/* <div className="dark:bg-[#101018] h-screen fixed w-full "></div> */}
      <div className={`w-full z-0 relative group h-screen text-screenLight`}>
        {!item ? (
          <div className="w-full flex justify-center items-center">
            {error ? (
              <h2 className="text-btn text-3xl">{error}</h2>
            ) : (
              <LoadingOutlined style={{ fontSize: 48 }} />
            )}
          </div>
        ) : (
          <div className="dark:bg-[#101018] absolute z-20 w-full pt-28 pb-28 px-3 y9:px-7 sm:px-10 md:px-5 lg:px-2 xl:px-10 2xl:px-20  ">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-auto flex justify-center md:justify-start ">
                  <div className="flex-col">
                    <img
                      src={item.info.poster}
                      alt={item.info.rus}
                      className="min-w-[180px] max-h-[265px] y9:min-w-[240px] y9:max-h-[352px] lg:min-w-[200px] lg:max-h-[351px]  xl:min-w-[240px] xl:max-h-[352px] self-center  rounded-lg  "
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full mr-8">
                  <div className=" flex flex-col  mx-2 xl:mx-5   md:flex-row md:justify-between ">
                    <div>
                      <div>
                        <p className="text-[25px] y9:text-[28px] font-bold text-center md:text-start  ">
                          {item.info.rus}
                        </p>
                        <div className="flex justify-center md:justify-start text-textPlight ">
                          {item.info.year}
                          <RxDotFilled className="self-center" />
                          {item.info.serial
                            ? moviesContentTypes[1]
                            : moviesContentTypes[0]}
                          <RxDotFilled className="self-center" />
                          <p>{formatTimeToMinutes(item.info.time)} минут</p>
                        </div>
                        <div className="flex md:hidden mt-3 justify-center gap-2">
                          <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[116px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  ">
                            <div>
                              <p className="text-[29px] text-yellow-400 inline">
                                {item.info.rating["rating_kp"]}
                              </p>
                              /10
                            </div>
                            <p className="text-sm text-textPDark ">
                              {" "}
                              {item.info.rating["vote_num_kp"]} проголосовало
                              <br />
                              (Кинопоиск)
                            </p>
                          </div>
                          {/* <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                          {likedd ? (
                            <AiFillLike className="self-center" />
                          ) : (
                            <BiLike className="self-center" />
                          )}
                        </div>
                        <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                          {likedd ? (
                            <AiFillDislike className="self-center" />
                          ) : (
                            <BiDislike className="self-center" />
                          )}
                        </div> */}
                          {/* <div
                          className=" text-[28px] cursor-pointer  border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark"
                          onClick={() => setlikedd(!likedd)}
                        >
                          {likedd ? (
                            <AiFillHeart className="self-center" />
                          ) : (
                            <AiOutlineHeart className="self-center" />
                          )}
                        </div> */}
                        </div>
                        <div className="flex justify-center md:justify-start mt-5">
                          {item.info.genre.split(",").map((genre, index) => (
                            // <Link
                            //   key={index}
                            //   to={{
                            //     pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                            //     state: { genre },
                            //   }}
                            // >
                            <p className="mr-2 backdrop-blur-sm  bg-gray-200  dark:bg-opacity-10 bg-opacity-20 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark  hover:text-screenLight duration-300 ">
                              {genre}
                            </p>
                            // </Link>
                          ))}
                        </div>
                        <p className="my-3 text-sm lg:text-[16px] ">
                          Режиссёр: {"  "}
                          <p className="inline text-[16px]    text-gray-600  md:text-textPlight">
                            {formatList(item.info.director)}
                          </p>
                        </p>
                        {item.info.slogan && (
                          <p className="my-3 text-sm lg:text-[16px] ">
                            Слоган: {"  "}
                            <p className="inline text-[16px]    text-gray-600  md:text-textPlight">
                              {item.info.slogan}
                            </p>
                          </p>
                        )}
                        <p className="my-3 text-sm lg:text-[16px] ">
                          Актёры: {"  "}
                          <p className="inline text-[16px]    text-gray-600  md:text-textPlight">
                            {formatList(item.info.actors)}
                          </p>
                        </p>
                        <p className="my-3 text-sm lg:text-[16px]">
                          Страна: {"  "}
                          <p className="inline text-[16px]  text-gray-600 md:text-textPlight">
                            {item.info.country}
                          </p>
                        </p>
                      </div>
                      <div className="mt-2 ">{item.info.description}</div>
                    </div>
                    <div className="flex flex-col w-full justify-between mt-4 ">
                      <div className="hidden md:flex md:flex-col md:justify-between self-end ">
                        <div>
                          {/* <div className="flex gap-2 justify-center ">
                          <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                            {likedd ? (
                              <AiFillLike className="self-center" />
                            ) : (
                              <BiLike className="self-center" />
                            )}
                          </div>
                          <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                            {likedd ? (
                              <AiFillDislike className="self-center" />
                            ) : (
                              <BiDislike className="self-center" />
                            )}
                          </div>
                          <div
                            title="add to favrite"
                            className=" text-[28px] cursor-pointer   border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark"
                            onClick={() => setlikedd(!likedd)}
                          >
                            {likedd ? (
                              <AiFillHeart className="self-center" />
                            ) : (
                              <AiOutlineHeart className="self-center" />
                            )}
                          </div>
                        </div> */}
                          <div className="flex gap-2 mt-2 justify-end ">
                            <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[76px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  hover:bg-screenDark  ">
                              <div>
                                <p className="text-[29px] text-yellow-400 inline">
                                  {item.info.rating["rating_kp"]}
                                </p>
                                /10
                              </div>
                              <p className="text-sm text-textPDark ">
                                {item.info.rating["vote_num_kp"]} проголосовало{" "}
                                <br />
                                (Кинопоиск)
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* <div className="self-center mt-20">
                        <button className="text-btn text-[20px] font-semibold border md:border-0 border-border px-6 py-4 rounded-lg  self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80 hover:bg-screenDark duration-300    ">
                          DOWNLAOD
                        </button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center realtive mt-[20px]">
              {window.innerWidth > 767 ? (
                <a href={advertisementService.trackerLinks.turbozaim}>
                  <img src={horizontalBannerPcFirst} />
                </a>
              ) : (
                <a href={advertisementService.trackerLinks.turbozaim}>
                  <img src={horizontalBannerMobileFirst} />
                </a>
              )}
            </div>
            <div className="w-full realtive mt-[60px]">
              <iframe
                title={item.info.rus}
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                frameBorder="0"
                hspace="0"
                vspace="0"
                marginHeight="0"
                marginWidth="0"
                style={{ border: "none" }}
                src={`https://top-kadr-web.vercel.app/movieiframe.html?link=${item.link}&token=${MovieService.token}`}
                width="100%"
                height="600"
              ></iframe>
            </div>

            <div className="w-full flex justify-center realtive mt-[20px]">
              {window.innerWidth > 767 ? (
                <a href={advertisementService.trackerLinks.webbankir}>
                  <img src={horizontalBannerPcSecond} />
                </a>
              ) : (
                <a href={advertisementService.trackerLinks.webbankir}>
                  <img src={horizontalBannerMobileSecond} />
                </a>
              )}
            </div>
            <Footer />
          </div>
        )}

        {/* <div className="w-full relative  z-0 group ">
          <div className="w-full absolute gradient-10 h-[50px] z-20 rotate-180 top-0 " />
          <div className="z-0 bg-screenDark  overflow-hidden max-h-[680px]  ">
            <img
              src={
                "https://filmkio.run/wp-content/uploads/2022/01/breaking-bad-second-cover.jpg"
              }
              alt=""
              className={`opacity-30    relative min-w-[700px] md:w-full xl:min-h-[625px] `}
            />
          </div>
          <div className="w-full relative gradient-10   dark:h-[150px] dark:-top-[150px] -top-[100px] h-[100px] " />
        </div> */}
        {/* <div className="relative -top-28 hidden md:flex"> */}
        {/* <MoviePageDtailes/> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default withRouter(MoviePage);
