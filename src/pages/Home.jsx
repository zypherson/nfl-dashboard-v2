import { useEffect, useState } from "react";
import { getTeams } from "../services/nfl";
import { Link } from "react-router-dom";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeams = teams.filter((team) =>
  team.team.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);
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
      <input
          type="text"
          placeholder="Search NFL teams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
      {teams.map(team => (
        <Link key={team.team.id} to={`/team/${team.team.id}`}>
          <p>{team.team.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;