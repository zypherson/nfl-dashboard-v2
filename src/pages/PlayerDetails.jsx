import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerStats } from "../services/nfl";
import { useFavorites } from "../context/FavoritesContext";
const PlayerDetails = () => {
  const { id } = useParams();
  const [stats, setStats] = useState([]);
  const { dispatch, favorites } = useFavorites();
  const isFavorited = favorites.find(f => f.id === player?.id);
  useEffect(() => {
    const fetchStats = async () => {
      const data = await getPlayerStats(id);
      setStats(data);
    };

    fetchStats();
  }, [id]);

  if (!stats.length) return <p>Loading player stats...</p>;

  const player = stats[0]?.player;
  const games = stats[0]?.statistics?.[0];

  return (
    <div>
      <h1>{player?.name}</h1>

      <h2>Stats</h2>

      <p>Games: {games?.games?.appearances ?? "N/A"}</p>
      <p>Passing Yards: {games?.passing?.yards ?? "N/A"}</p>
      <p>Touchdowns: {games?.passing?.touchdowns ?? "N/A"}</p>

    <button
            onClick={() =>
                dispatch({
                type: isFavorited ? "REMOVE" : "ADD",
                payload: {
                    id: player.id,
                    name: player.name
                }
                })
            }
            >
            {isFavorited ? "Remove Favorite" : "Add Favorite"}
    </button>
    </div>
  );
};

export default PlayerDetails;