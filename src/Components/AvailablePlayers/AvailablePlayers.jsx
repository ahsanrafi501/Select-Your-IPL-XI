import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";


const AvailablePlayers = ({ playerPromise, setTotalBalance, totalBalance, purchesedPlayers, setPurchesedPlayers }) => {
  const playersData = use(playerPromise);
  return (
    <div className="md:mx-[140px] grid md:grid-cols-3 grid-cols-1 gap-6">

        {
            playersData.map(player => <PlayerCard setPurchesedPlayers={setPurchesedPlayers} purchesedPlayers={purchesedPlayers} totalBalance={totalBalance} setTotalBalance={setTotalBalance} player={player}></PlayerCard>)
        }
     
    </div>
  );
};

export default AvailablePlayers;
