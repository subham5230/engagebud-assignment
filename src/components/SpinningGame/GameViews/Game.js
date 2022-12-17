import React from 'react'
import GameWheel from '../../../assets/images/GameWheel.png'
import Pointer from '../../../assets/images/Pointer.png'
import { play } from '../../../services/GameEngine'
import { GAME_VIEW } from '../GameViewEnum'

function Game({setGameView, setReward}) {

  const wheelRef = React.useRef(null)
  const spin = () => {
    var id = null;
    const wheel = wheelRef.current
    let deg = 0;

    const data = play()

    clearInterval(id);
    id = setInterval(rotate, 2);

    function rotate() {
      if (deg === data.angle) {
        clearInterval(id);
        setReward(data.reward)
        setTimeout(() => {
          setGameView(GAME_VIEW.REWARD)
        }, 1500);
        
      } else {
        deg++; 
        wheel.style.transform = `rotate(${deg}deg)`
      }
    }
  }

  return (
    <div className='w-full h-full'>
      <div className='h-[80%] relative flex justify-center items-center'>
        <img ref={wheelRef} src={GameWheel} alt="" className='w-full h-auto lg:h-full lg:w-auto mx-auto'></img>
        <img src={Pointer} alt="" className="h-[4rem] w-auto absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto"></img>
      </div>
      <div className='h-[20%] flex justify-center items-center'>
        <button onClick={spin} className='bg-[#146531] text-white text-xl font-bold rounded-full h-[4rem] w-[12rem]'>SPIN</button>
      </div>
    </div>
  )
}

export default Game