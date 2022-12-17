import React from "react";
import BGHeader from "../../assets/images/lg_bg_header.png";
import BGFooter from "../../assets/images/lg_bg_footer.png";
import { GAME_VIEW } from "./GameViewEnum";
import EmailCollect from "./GameViews/EmailCollect";
import Game from "./GameViews/Game";
import Reward from "./GameViews/Reward";

function GameContainer({ isOpen, setIsOpen }) {

  const [gameView, setGameView] = React.useState(GAME_VIEW.EMAIL)
  const [reward, setReward] = React.useState([])

  const Background = () => {
    return (
      <>
        <img
          className="absolute left-0 top-0 right-0 -z-10"
          src={BGHeader}
          alt="bg"
        />
        <img
          className="absolute left-0 bottom-0 right-0 -z-10"
          src={BGFooter}
          alt="bg"
        />
      </>
    );
  };

  const renderView = () => {

    switch(gameView){
      case GAME_VIEW.EMAIL:
        return <EmailCollect setGameView={setGameView} setIsOpen={setIsOpen}/>;
      
      case GAME_VIEW.GAME:
        return <Game setGameView={setGameView} setReward={setReward}/>;

      case GAME_VIEW.REWARD:
        return <Reward setGameView={setGameView} reward={reward} setIsOpen={setIsOpen}/>;

      default:
        return <EmailCollect setGameView={setGameView} setIsOpen={setIsOpen}/>;
    }
  }

  return (
    <div
      className={`w-screen md:w-[750px] lg:w-screen bg-[#C6EFC8] top-0 left-0 bottom-0 ${
        isOpen ? "fixed" : "hidden"
      }`}
    >
      <div className="h-full w-full lg:container lg:py-[6rem] lg:px-[20rem] relative lg:flex items-center justify-between">
        <Background />
        {renderView()}
      </div>
    </div>
  );
}

export default GameContainer;
