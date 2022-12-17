import React from "react";
import Spinner from "../../../assets/images/spinner.png";
import { GAME_VIEW } from "../GameViewEnum";

function Reward({ reward, setIsOpen, setGameView }) {

  const copyCode = () => {
    navigator.clipboard.writeText(reward.coupon)
  }

  return (
    <>
      <img
        className="h-auto w-[45%] absolute -z-10 
                  left-0 right-0 mx-auto -top-[4rem]
                  md:my-auto md:mx-0 md:top-0 md:bottom-0 md:-left-[21.5%]
                  lg:left-0 lg:relative"
        src={Spinner}
        alt="bg"
      />
      <div className="md:w-[50%] h-full flex flex-col items-center justify-center ml-auto md:mr-[5rem] lg:ml-0 lg:mr-0">
        <h1 className="text-black font-bold text-3xl">Congrats! You Won:</h1>
        <p className="text-3xl font-semibold mt-[1rem]">{reward.display}</p>
        <div className="bg-[#08080838] h-[4rem] w-[23rem] mt-[1.5rem] rounded-lg flex">
          <p className="text-white font-bold text-3xl flex-1 flex items-center justify-center">{reward.coupon}</p>
          <button className="bg-[#146531] w-[4rem] h-full rounded-lg text-white font-bold" onClick={copyCode}>Copy</button>
        </div>
        <button
          onClick={() => {
            copyCode()
            setGameView(GAME_VIEW.EMAIL)
            setIsOpen(false);
          }}
          className="mt-[2rem] mx-auto w-[20rem] h-[3.5rem] text-lg font-bold bg-[#146531] text-white rounded-full"
        >
          Close Panel & Copy
        </button>
        <p className="text-[#146531]">*You can claim your coupon for 10 minutes only!</p>
      </div>
    </>
  );
}

export default Reward;
