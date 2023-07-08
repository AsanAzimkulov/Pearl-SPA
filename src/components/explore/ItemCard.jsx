import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatTimeToMinutes } from "../../utils/formatTimeToMinutes";

const ItemCard = ({ item }) => {

  return (
    <Link to={{ pathname: `/watch`, state: { item } }}>
      <div className={`flex flex-col w-[140px]  y9:w-[182px]  `}>
        <div className="relative group text-textDark">
          <img
            src={item.info.poster}
            alt=""
            className={`w-[140px] h-[205px] y9:w-[182px] y9:h-[268px] rounded-xl`}
          />
          <div className="absolute hidden y9:flex z-20  inset-0  rounded-xl origin-bottom scale-y-0 group-hover:scale-y-100 group-hover:bg-opacity-80   group-hover:bg-screenDark  duration-200 cursor-pointer ">
            <div className=" flex flex-col justify-between">
              <div>
                <p className=" px-5 pt-5 font-bold">Год : {item.info.year}</p>
                <p className=" px-5 pt-1 font-semibold">
                  {formatTimeToMinutes(item.info.time)} минут
                </p>

                <div className="flex flex-wrap mt-2 mx-2 text-sm font-semibold">
                  {item.info.genre.split(",").map((genre) => (
                    <p className="mr-2 backdrop-blur-sm  bg-gray-200 bg-opacity-10 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark ">
                      {genre}
                    </p>
                  ))}
                </div>
              </div>
              <div className="text-center pb-6  w-[180px] px-3 ">
                <button className=" btn py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl  ">
                  Смотреть фильм
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[140px] text-center y9:w-[180px]  flex self-center  justify-center text-[17px] ">
          <p>{item.info.rus}</p>
        </div>
        <div className="text-[14px] text-[#ebaf1a] flex justify-center ">
          <FaStar className="self-center mx-1" />
          <p className="self-center font-semibold">
            {item.info.rating.rating_kp}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
