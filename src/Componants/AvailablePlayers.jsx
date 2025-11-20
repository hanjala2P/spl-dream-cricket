import React,{use} from "react";

const AvailablePlayers = ({ PlayersPromis }) => {
const playerData=use(PlayersPromis);
console.log(playerData);

    return (
        <div>
            Available
        </div>
    );
};

export default AvailablePlayers;
