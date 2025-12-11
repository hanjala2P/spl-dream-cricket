import React, { use } from "react";
import PlayerCard from "./PlayerCard/PlayerCard";

const AvailablePlayers = ({
  PlayersPromis,
  availableBalance,
  setAvailableBalance,
  setpurhcasedPlayers,
  purhcasedPlayers
}) => {
  const playerData = use(PlayersPromis);
  
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      {playerData.map((player) => (
        <PlayerCard
         purhcasedPlayers={purhcasedPlayers}
          setpurhcasedPlayers={ setpurhcasedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
