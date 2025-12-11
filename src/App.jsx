import "./App.css";
import AvailablePlayers from "./Componants/AvailablePlayers";
import SelectedPlayers from "./Componants/SelectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";
import Navbar from "./Componants/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const PlayersPromis = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000);
  const [purhcasedPlayers,setpurhcasedPlayers]=useState([])
  console.log(purhcasedPlayers);

  const removePlyer=(p)=>{
    const filteredData=purhcasedPlayers.filter(ply=>ply.player_name!==p.player_name);
    console.log(filteredData);
    setpurhcasedPlayers(filteredData);
    setAvailableBalance(availableBalance+parseInt(p.price));
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className=" max-w-[1200px] mx-auto flex items-center justify-between p-4 my-4">
        <h1 className="font-semibold text-2xl">{
        toggle===true?"Available Players":`" Selected Players (${purhcasedPlayers.length}/6)"`
          }</h1>

        <div className="flex items-center text-gray-500 font-medium ">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-5 border-1 border-gray-400 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-5 border-1 border-gray-400 rounded-r-2xl border-r-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({purhcasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <div>
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers
          purhcasedPlayers={purhcasedPlayers}
          setpurhcasedPlayers={setpurhcasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            PlayersPromis={PlayersPromis}
          />
        </Suspense>
      ) : (
        <SelectedPlayers removePlyer={removePlyer} purhcasedPlayers={purhcasedPlayers}></SelectedPlayers>
      )}
      <ToastContainer/>
    </>
  );
}

export default App;
