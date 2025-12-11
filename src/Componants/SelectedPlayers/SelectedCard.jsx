import React from "react";

const SelectedCard = ({player,removePlyer}) => {
    console.log(player);
    const handleRemove=()=>{
        removePlyer(player);
    }
  return (
    <div>
      <div className="border-2 border-gray-300 mt-5 rounded-xl flex justify-between items-center p-4 rounded-lg">
        <div className="flex gap-3 items-center ">
          <img
            className="h-18 w-24 rounded-xl"
            src={player.player_img}
            alt=""
          />
          <div>
            <h2 className="font-semibold text-2xl">{player.player_name}</h2>
            <h4 className="text-gray-600">{player.batting_style}</h4>
          </div>
        </div>
        <div onClick={handleRemove}>
          <img src="https://i.ibb.co/67Wj8snh/dlt.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
