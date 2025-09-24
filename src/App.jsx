import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayer from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};

// setToggle(false);

const playerPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [totalBalance, setTotalBalance] = useState(600000000);
  const [purchesedPlayers, setPurchesedPlayers] = useState([]);
  console.log(purchesedPlayers);

  const handleRemoveSelectedData = (selectedPlayersData) => {
    const playerLeft = purchesedPlayers.filter(
      (removePlayer) =>
        removePlayer.player_name !== selectedPlayersData.player_name
    );
    setPurchesedPlayers(playerLeft);
    setTotalBalance(totalBalance + selectedPlayersData.price);
  };

  return (
    <>
      <Navbar totalBalance={totalBalance}></Navbar>
      <div className="flex justify-between sm:px-[140px] my-4 items-center">
        <h1 className="font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players(${purchesedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`border border-red-500 rounded-l-xl py-2 px-3 ${
              toggle && "bg-[#E7FE29]"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border border-red-500 rounded-r-xl py-2 px-3 ${
              toggle || "bg-[#E7FE29]"
            }`}
          >
            Selected <span>({purchesedPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <AvailablePlayers
            totalBalance={totalBalance}
            setTotalBalance={setTotalBalance}
            purchesedPlayers={purchesedPlayers}
            setPurchesedPlayers={setPurchesedPlayers}
            playerPromise={playerPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <SelectedPlayer
            handleRemoveSelectedData={handleRemoveSelectedData}
            purchesedPlayers={purchesedPlayers}
          ></SelectedPlayer>
        </Suspense>
      )}
    </>
  );
}

export default App;
