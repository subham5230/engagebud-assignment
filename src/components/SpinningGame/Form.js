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
        <svg className="w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
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
        <svg className="w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
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
      <div className="flex justify-center items-center min-h-[5rem] mt-[2rem] border-2 py-2 pl-3 border-black rounded-lg">
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
