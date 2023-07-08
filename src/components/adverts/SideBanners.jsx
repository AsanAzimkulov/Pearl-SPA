import React from "react";
import verticalMobileThird from "../../assets/LEADS/dozarplati/20230630 dozarplati 300 x 500 8b838eba44ba5ea5fde013857ee93088.png";
import verticalThird from "../../assets/LEADS/dozarplati/20230630 marked LjN8KAMYL dozarplati 640 х 960 20b9a3b505c7710e83ec889ea2124424.png";
import vertical from "../../assets/LEADS/turbozaim/20230531 ban-sum-500x500.jpg";
import verticalMobile from "../../assets/LEADS/turbozaim/20230531 marked LjN8K8io8 ban-sum-240x400.jpg";
import verticalSecond from "../../assets/LEADS/webbankir/20230627 marked LjN8JuhH1 v2 1080х1920.jpg";
import verticalMobileSecond from "../../assets/LEADS/webbankir/20230627 marked LjN8Jyj4B v1 300x600 05b4cdf19b732070cfeb3edf3d5dafb3.png";
import advertisementService from "../../services/services/AdvertisementService";

const SideBanners = ({ refresh }) => {
  const isMobile = window.innerWidth < 768;

  const FROM_TOP_TO_END_BLOCK = isMobile ? 1100 : 2000;
  const BLOCK_HEIGHT = isMobile ? 650 : 1500;

  function calculateRepetitions() {
    const remainedSpace =
      pageHeight - FROM_TOP_TO_END_BLOCK < 0
        ? 0
        : pageHeight - FROM_TOP_TO_END_BLOCK;

    return Math.floor(remainedSpace / BLOCK_HEIGHT);
  }
  const pageHeight = document.documentElement.scrollHeight;

  return !isMobile ? (
    <div className="w-[30%] flex-col pr-2 content-center">
      {new Array(calculateRepetitions()).fill(null).map(() => (
        <>
          <a href={advertisementService.trackerLinks.turbozaim}>
            {" "}
            <img src={vertical} className="w-100 mb-2" />
          </a>
          <a href={advertisementService.trackerLinks.webbankir}>
            {" "}
            <img src={verticalSecond} className="w-100 mb-2" />
          </a>
          <a href={advertisementService.trackerLinks.dozarplati}>
            {" "}
            <img src={verticalThird} className="w-100" />
          </a>
        </>
      ))}
    </div>
  ) : (
    <div className="w-[30%] flex-col pr-2  content-center">
      {new Array(calculateRepetitions()).fill(null).map(() => (
        <>
          <a href={advertisementService.trackerLinks.turbozaim}>
            {" "}
            <img src={verticalMobile} className="w-100 mb-2" />
          </a>
          <a href={advertisementService.trackerLinks.webbankir}>
            {" "}
            <img src={verticalMobileSecond} className="w-100 mb-2" />
          </a>
          <a href={advertisementService.trackerLinks.dozarplati}>
            {" "}
            <img src={verticalMobileThird} className="w-100" />
          </a>
        </>
      ))}
    </div>
  );
};

export default SideBanners;
