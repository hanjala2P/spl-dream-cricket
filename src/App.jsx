import './App.css';
import AvailablePlayers from './Componants/AvailablePlayers';
import SelectedPlayers from './Componants/SlelectedPlayers/SelectedPlayers';
import coin from './assets/dollar 1.png';
import navLogo from './/assets/logo.png';
import { Suspense } from 'react';

  const fetchPlayers=async()=>{
    const res= await fetch("/players.json")
    return res.json()
  }

function App() {
 const PlayersPromis=fetchPlayers();
  return ( 
    <>
    <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="w-[60px] h-[60px] "><img src={navLogo} alt=" Brand Logo" /></a>
  </div>
   <div className='flex item-center'>
    <span className='text-xl mr-1'>6000</span>
    <span className='text-xl mr-1'>Coin</span>
    <img  src={coin} alt="" />
   </div>
  </div>

   <Suspense fallback={<div><span className="loading loading-ring loading-xl"></span></div>}>
  <AvailablePlayers PlayersPromis={PlayersPromis} />
</Suspense>

    {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App 
