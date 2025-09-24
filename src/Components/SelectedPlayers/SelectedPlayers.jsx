import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";


const SelectedPlayers = ({ purchesedPlayers, handleRemoveSelectedData }) => {
  return (
   purchesedPlayers.map( player => <SelectedPlayerCard handleRemoveSelectedData={handleRemoveSelectedData} player={player}></SelectedPlayerCard>)
  );
};

export default SelectedPlayers;
