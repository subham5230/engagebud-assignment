import React from 'react'
import Form from '../Form';
import CrossSVG from "../../../assets/icons/cross_icon.png";
import Spinner from "../../../assets/images/spinner.png";

function EmailCollect({setGameView, setIsOpen}) {
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
          <h1 className="text-black font-bold text-[2rem] text-left max-w-[23rem]">
            This is how EngageBud looks like in action!
          </h1>
          <Form setGameView={setGameView}/>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="ml-auto flex text-lg font-bold mt-[1.5rem]"
          >
            No, I don&apos;t feel lucky
            <span>
              <img
                className="ml-[0.75rem] h-[1.5rem]"
                src={CrossSVG}
                alt="close"
              />
            </span>
          </button>
        </div>
    </>
  )
}

export default EmailCollect