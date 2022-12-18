import React from 'react';
import GameContainer from './components/SpinningGame/GameContainer';

function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="App bg-gray-100 min-h-screen relative">
      <div className='h-[5rem] bg-white flex px-[3rem] items-center'>
      <h1 className='text-4xl font-semibold'>Website</h1>
      </div>
      <div className='lg:flex gap-4 px-[3rem] mt-[7rem]'>
        <div className='h-[15rem] lg:w-1/3 bg-gray-500'></div>
        <div className='hidden lg:block h-[15rem] lg:w-1/3 bg-gray-300'></div>
        <div className='hidden lg:block h-[15rem] lg:w-1/3 bg-gray-600'></div>
      </div>

      {/* Spinning Game */}
      <button onClick={()=>{setIsOpen(!isOpen)}} className={`absolute z-20 top-0 bottom-0 my-auto left-[1rem] bg-blue-900 text-white rounded-full h-[4rem] w-[4rem] ${isOpen? 'hidden' : 'block'}`}>Spin</button>
      <GameContainer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default App;
