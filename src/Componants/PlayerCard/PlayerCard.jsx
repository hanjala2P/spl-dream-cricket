import React, { useState } from "react";
import userLogo from "../../assets/user.png";
import flag from "../../assets/flag.png";
const PlayerCard = ({ player, availableBalance, setAvailableBalance }) => {
  const [isSelected, setIsSelceted] = useState(false);
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price);
    if (availableBalance < playerPrice) {
      alert("You don't have enough balance to select this player");
      return;
    }
    setIsSelceted(true), setAvailableBalance(availableBalance - playerPrice);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-lg p-4 mx-auto">
      <figure>
        <img src={player.player_img} alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <img src={userLogo} alt="" />
          {player.player_name}
        </h2>
        <div className="flex items-center justify-between border-b-1 pb-1 border-neutral-600">
          <div className="flex items-center justify-center gap-3 ">
            <img src={flag} alt="" />
            <p>{player.player_country}</p>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>
        <div className="flex items-center justify-between font-bold">
          <span>
            <p>Rating</p>
          </span>
          <span>{player.rating}</span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h3>{player.batting_style}</h3>
            <button className="text-neutral-500">{player.bowling_style}</button>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium ">Price: ${player.price}</h3>
            <button
              disabled={isSelected}
              onClick={() => {
                handleSelected(player);
              }}
              className="btn font-normal  "
            >
              {isSelected === true ? "selected" : "Choose Players"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
