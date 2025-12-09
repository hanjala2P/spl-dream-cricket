import React, { use } from "react";
import PlayerCard from "./PlayerCard/PlayerCard";

const AvailablePlayers = ({
  PlayersPromis,
  availableBalance,
  setAvailableBalance,
}) => {
  const playerData = use(PlayersPromis);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      {playerData.map((player) => (
        <PlayerCard
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
