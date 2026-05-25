import { useState } from "react";
import { getPlayerStats } from "../services/nfl";

const ComparePlayers = () => {

  const [playerOneId, setPlayerOneId] = useState("");
  const [playerTwoId, setPlayerTwoId] = useState("");

  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const handleCompare = async () => {

    const p1 = await getPlayerStats(playerOneId);
    const p2 = await getPlayerStats(playerTwoId);

    setPlayerOne(p1[0]);
    setPlayerTwo(p2[0]);
  };

  return (
    <div>

      <h1>Compare Players</h1>

      <input
        type="text"
        placeholder="Player 1 ID"
        value={playerOneId}
        onChange={(e) => setPlayerOneId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Player 2 ID"
        value={playerTwoId}
        onChange={(e) => setPlayerTwoId(e.target.value)}
      />

      <button onClick={handleCompare}>
        Compare
      </button>

      {playerOne && playerTwo && (

        <div>

          <h2>
            {playerOne.player.name} vs {playerTwo.player.name}
          </h2>

          <p>
            Passing Yards:
            {" "}
            {playerOne.statistics[0]?.passing?.yards ?? "N/A"}
            {" vs "}
            {playerTwo.statistics[0]?.passing?.yards ?? "N/A"}
          </p>

          <p>
            Touchdowns:
            {" "}
            {playerOne.statistics[0]?.passing?.touchdowns ?? "N/A"}
            {" vs "}
            {playerTwo.statistics[0]?.passing?.touchdowns ?? "N/A"}
          </p>

          <p>
            Completion %:
            {" "}
            {playerOne.statistics[0]?.passing?.completion ?? "N/A"}
            {" vs "}
            {playerTwo.statistics[0]?.passing?.completion ?? "N/A"}
          </p>

        </div>

      )}

    </div>
  );
};

export default ComparePlayers;