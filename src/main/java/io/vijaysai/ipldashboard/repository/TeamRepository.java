package io.vijaysai.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.vijaysai.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
