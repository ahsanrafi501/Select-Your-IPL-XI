import React, { useState } from "react";
import userImg from "../../assets/user1.png";
import flagImg from "../../assets/flag.png";

const PlayerCard = ({
  player,
  setTotalBalance,
  totalBalance,
  purchesedPlayers,
  setPurchesedPlayers,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const selectedPlayer = (playerData) => {
    if (totalBalance < playerData.price) {
      alert("Unavailable Balance");
      return;
    }

    if (purchesedPlayers.length === 6) {
      alert("You can select 6 players only");
      return;
    }

    setTotalBalance(totalBalance - playerData.price);
    setIsDisabled(true);
    setPurchesedPlayers([...purchesedPlayers, playerData]);
  };
  return (
    <div key={player.player_name} className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="w-full h-[370px] object-cover"
          src={player.player_img}
          alt={player.player_name + " Photo"}
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <img src={userImg} alt="" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>
        <div className="flex justify-between items-center border-b border-b-gray-700 pb-4">
          <div className="flex gap-2">
            <img src={flagImg} alt="" />
            <p>{player.player_country}</p>
          </div>
          <div>
            <button className="btn">{player.playing_role}</button>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="font-bold">Rating</h3>
          <h3>{player.rating}</h3>
        </div>
        <div className="flex justify-between mt-2">
          <h3 className="font-bold">{player.bowling_style}</h3>
          <h3 className="text-[#13131370]">{player.batting_style}</h3>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p>
              Price: $ <span>{player.price}</span>
            </p>
          </div>
          <button
            onClick={() => selectedPlayer(player)}
            disabled={isDisabled}
            className="btn"
          >
            {isDisabled ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
