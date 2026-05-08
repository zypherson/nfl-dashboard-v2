import { useEffect, useState } from "react";
import { getTeams } from "../services/nfl";
import { Link } from "react-router-dom";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const data = await getTeams();
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1>NFL Teams</h1>

      {teams.map(team => (
        <Link key={team.team.id} to={`/team/${team.team.id}`}>
          <p>{team.team.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;