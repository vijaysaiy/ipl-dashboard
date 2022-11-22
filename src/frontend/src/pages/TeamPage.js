import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState();

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch("http://localhost:8080/team/Delhi Capitals");
      const data = await res.json();
      setTeam(data);
    };

    fetchMatches();
  }, []);
  if (!team) return <p>Please wait...</p>;
  return (
    <div className="team-page">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]} />
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard match={match} />
      ))}
    </div>
  );
};
