import React,{use} from "react";
import userLogo from '../assets/user.png';
import flag from '../assets/flag.png';

const AvailablePlayers = ({ PlayersPromis }) => {
const playerData=use(PlayersPromis);
console.log(playerData);

    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center"> 
        {
            playerData.map(player=> 
             <div className="card bg-base-100 w-96 shadow-lg p-4 mx-auto">
  <figure>
    <img
      src={player.player_img}
      alt="Shoes" />
      
  </figure>
  
  <div className="card-body">
    <h2 className="card-title"><img src={userLogo} alt="" />{player.player_name}</h2>
    <div className="flex items-center justify-between border-b-1 pb-1 border-neutral-600">
       <div className="flex items-center justify-center gap-3 ">
         <img src={flag} alt="" />
         <p>{player.player_country}</p>
       </div>
        <button className="btn">{player.playing_role}</button>
      </div>
    <div className="flex items-center justify-between font-bold">
        <span><p>Rating</p></span>
        <span>{player.rating}</span>
    </div>
    <div>
        <div className="flex items-center justify-between">
        <h3>{player.batting_style
}</h3>
        <button className="text-neutral-500">{player.bowling_style
}</button>
    </div>
    <div className="flex items-center justify-between">
        <h3 className="font-medium ">Price: ${player.
price}</h3>
        <button className="btn font-normal  ">Choose Players</button>
    </div>
    </div>
    
  </div>
</div>)
        }

        </div>
    );
};

export default AvailablePlayers;
