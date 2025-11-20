import React,{use} from "react";

const AvailablePlayers = ({ PlayersPromis }) => {
    // const [playerData, setPlayerData] = useState([]);
    // console.log(PlayersPromis);

    // useEffect(() => {
    //     PlayersPromis.then(data => {
    //         setPlayerData(data);
    //         console.log(data);
    //     });
    // }, [PlayersPromis]);
const playerData=use(PlayersPromis);

    return (
        <div>
            Available
        </div>
    );
};

export default AvailablePlayers;
