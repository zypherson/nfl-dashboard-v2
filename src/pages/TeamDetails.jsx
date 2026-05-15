/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTeamById, getPlayersByTeam } from "../services/nfl";
import { Link } from "react-router-dom";
const TeamDetails = () => {
  const { id } = useParams();

  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamData = await getTeamById(id);
      const playerData = await getPlayersByTeam(id);

      setTeam(teamData);
      setPlayers(playerData);
    };

    fetchData();
  }, [id]);

  if (!team) return <p>Loading...</p>;

  return (
    <div>
      <h1>{team.team.name}</h1>

      <img
        src={team.team.logo}
        alt={team.team.name}
        width={100}
      />

      <h2>Roster</h2>

      {players.slice(0, 10).map((player) => (
        <div key={player.player.id}>
          {player.player.name}
        </div>
      ))}
      <Link to="/">← Back</Link>
      <Link to={`/player/${player.player.id}`}>
            <div>{player.player.name}</div>
      </Link>
    </div>
  );
};

export default TeamDetails;