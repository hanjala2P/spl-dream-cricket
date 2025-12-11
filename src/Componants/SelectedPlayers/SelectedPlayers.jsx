import React from 'react';
import SelectedCard from './SelectedCard';
const SelectedPlayers = ({purhcasedPlayers,removePlyer}) => {
    return (
        <div className='max-w-[1200px] mx-auto '>
            {
                purhcasedPlayers.map(player=> <SelectedCard removePlyer={removePlyer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;