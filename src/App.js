import React from 'react';
import './App.css';
import GameContainer from './components/SpinningGame/GameContainer';

function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="App bg-gray-400 min-h-screen relative">
      <h1 className='text-4xl font-semibold'>Website</h1>
      <button onClick={()=>{setIsOpen(!isOpen)}} className={`absolute z-20 top-0 bottom-0 my-auto left-[1rem] bg-blue-900 text-white rounded-full h-[4rem] w-[4rem] ${isOpen? 'hidden' : 'block'}`}>Spin</button>
      <GameContainer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default App;
