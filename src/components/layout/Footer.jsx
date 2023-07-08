import React from "react";
import donate from "../../assets/donate.png";
import github from "../../assets/github.png";
import googlePlay from "../../assets/googleplay.png";
import telegram from "../../assets/telegram.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";

const Footer = () => {
  return (
    <div className="w-full flex justify-around py-[40px]">
      <ul className="w-full flex justify-around flex-wrap">
        <li className="flex content-center flex-row ">
          <a href="https://play.google.com/store/apps/details?id=com.asanazimkulov.topkadr">
            Наше мобильное приложение:
            <img src={googlePlay} className="h-[50px] mt-2" />
          </a>
        </li>
        <li className="flex content-center flex-row">
          <a href="https://www.tiktok.com/@pearlfilmmm">
            Мы в тикток:
            <img src={tiktok} className="h-[50px] mt-2" />
          </a>
        </li>
        <li className="flex content-center flex-row">
          <a href="https://www.youtube.com/@pearlfilmm">
            Мы в ютуб:
            <img src={youtube} className="h-[50px] mt-2" />
          </a>
        </li>
        <li className="flex content-center flex-row">
          <a href="https://t.me/pearlfilmm">
            Телеграм канал:
            <img src={telegram} className="h-[50px] mt-2" />
          </a>
        </li>
        <li className="flex content-center" i>
          <a href="https://github.com/AsanAzimkulov">
            Гитхаб:
            <img src={github} className="h-[50px] mt-2" />
          </a>
        </li>
        <li className="flex content-center flex-row">
          <a href="https://asan-azimkulov.vercel.app/donate.html">
            Поддержать проект:
            <img src={donate} className="h-[50px] mt-2" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
