import React from 'react';
import deleteLogo from "../../assets/deleteLogo.png";

const SelectedPlayerCard = ({player, handleRemoveSelectedData}) => {
    const handleBin = (player) =>{
        handleRemoveSelectedData(player);
    }
    return (
        <div className="md:mx-[140px] border border-gray-300 rounded-2xl p-4 flex gap-2 items-center mb-[7px]">
              <img
                src={player.player_img}
                className="h-[90px] w-[90px] rounded-2xl object-cover"
                alt=""
              />
        
              <div className="flex justify-between items-center w-full mr-3">
                <div>
                  <h2 className="font-bold">{player.player_name}</h2>
                  <p className="text-xs">{player.playing_role}</p>
                </div>
                <div>
                  <img onClick={() => handleBin(player)} src={deleteLogo} alt="" />
                </div>
              </div>
            </div>
    );
};

export default SelectedPlayerCard;