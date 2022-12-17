import React from "react";
import { collectEmail } from "../../services/Email";
import { GAME_VIEW } from "./GameViewEnum";

function Form({setGameView}) {

  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')

  function submit(e){
    e.preventDefault()

    const isEmailCollected = collectEmail(email, phone)

    if(isEmailCollected) {
      setEmail('')
      setPhone('')
      setGameView(GAME_VIEW.GAME);
    }
  }
  return (
    <form method="POST" onSubmit={submit} className="mt-[2rem] w-[23rem]">
      <div className="relative flex items-center w-full h-[3rem]">
        <span className="bg-white w-[3.5rem] h-full flex items-center justify-center border-r border-gray-300">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="h-[60%] w-auto"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          className="flex-1 h-full px-2"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
        />
      </div>
      <div className="relative flex items-center w-full h-[3rem] mt-[1rem]">
        <span className="bg-white w-[3.5rem] h-full flex items-center justify-center border-r border-gray-300">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="h-[60%] w-auto"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          className="flex-1 h-full px-2"
          type="tel"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}
          required
        />
      </div>
      <div className="flex justify-center items-center h-[5rem] mt-[2rem] border-2 pl-3 border-black rounded-lg">
        <input className="h-full w-[15%]" type="checkbox" value="" required />
        <span className="text-left px-4">
          I agree to receiving recurring automated messages at the number I have
          provided. Consent is not a condition to purchase.
        </span>
      </div>

      <button
        className="bg-[#146531] left-0 right-0 mx-auto text-xl text-white mt-[1rem] h-[3rem] w-full rounded-full flex items-center justify-center"
        type="submit"
      >
        Try your Luck
      </button>
      <p className="text-[12px] mt-2">
        *You can spin the wheel only once! *If you win, you can claim your
        coupon for 10 minutes only!
      </p>
    </form>
  );
}

export default Form;
