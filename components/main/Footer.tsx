import React from "react";
import {
  RxGithubLogo,
} from "react-icons/rx";

import {
  FaFacebook,
  FaFreeCodeCamp,
  FaLinkedin,
  FaTelegram,
  FaUikit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTelegram />
              <span className="text-[15px] ml-[6px] z-[180]"><a href="https://t.me/v1daaaa" target="_blank">Telegram</a></span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px] z-[180]"><a href="https://github.com/V1daa" target="_blank">Github</a></span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaFreeCodeCamp />
              <span className="text-[15px] ml-[6px] z-[180]"><a href="https://www.freecodecamp.org/ViDA_" target="_blank">FreeCodeCamp</a></span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] z-[180]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaFacebook />
              <span className="text-[15px] ml-[6px] z-[180]"><a href="https://www.facebook.com/profile.php?id=61552239535206" target="_blank">Facebook</a></span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaUikit />
              <span className="text-[15px] ml-[6px] z-[180]"><a href="https://leetcode.com/ViDa-la-ViDA/" target="_blank">LeetCode</a></span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px] z-[180]"><a href="https://www.linkedin.com/in/dmytro-volianskyi-703771298/" target="_blank">Linkedin</a></span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] z-[180]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px] z-[180]">Poznan, Poland</span>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px] z-[180]">+48 792 945 335</span>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px] z-[180]">
                volia.d.vida@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center z-[180]">
          Volia&trade; 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
