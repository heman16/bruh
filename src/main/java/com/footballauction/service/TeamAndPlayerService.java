package com.footballauction.service;

import com.footballauction.Repository.PlayerNewRepository;
import com.footballauction.Repository.PlayerRepository;
import com.footballauction.Repository.TeamRepository;
import com.footballauction.models.BalanceAndPlayerUpdate;
import com.footballauction.models.Players;
import com.footballauction.models.Team;
import com.footballauction.models.Player;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamAndPlayerService {

    @Autowired
    PlayerRepository playerRepository;


    @Autowired
    TeamRepository teamRepository;

    public List<Team> getAllTeams(){
        return teamRepository.findAllByOrderByTeamIdAsc();
    }

    public List<Player> getAllPlayers(){
        return playerRepository.findAllByOrderByGenderAsc();
    }



    public List<Player> getAllPlayersByTeamID(Long teamId){
        return playerRepository.findAllByTeamId(teamId);
    }

    public Player updatePlayer(  Player player) {
        return playerRepository.save(player);
    }

    public Team updateTeamBalance(Team team){
        return teamRepository.save(team);
    }

    public List<Player> getPlayersByName(String name){
        return playerRepository.findPlayersByPlayerNameContaining(name);
    }


    public void updateDetails(BalanceAndPlayerUpdate balanceAndPlayerUpdate){
        Player player = playerRepository.getReferenceById(Long.valueOf(balanceAndPlayerUpdate.getPlayerId()));
        Team team = teamRepository.getReferenceById(Long.valueOf(balanceAndPlayerUpdate.getTeam_id()));
        player.setTeam(team);
        player.setTeamId(team.getTeamId());
        player.setSoldPrice(balanceAndPlayerUpdate.getAmount());
        Float balance = (float) (team.getBalance() - balanceAndPlayerUpdate.getAmount());
        team.setBalance(balance);
        teamRepository.save(team);
        playerRepository.save(player);

    }

    public void releasePlayer(Long playerId){
        Optional<Player> optionalPlayer = playerRepository.findById(playerId);
            if(optionalPlayer.isPresent()){
                Player player = optionalPlayer.get();
                //get sold price
                Double soldPrice = player.getSoldPrice();
                //update sold price to base price
                player.setSoldPrice(player.getBasePrice());

                Team team = player.getTeam();
                team.setBalance((float) (soldPrice + team.getBalance()));
                player.setTeam(null);
                player.setTeamId(null);
                teamRepository.save(team);
                playerRepository.save(player);
                System.out.println(player.getTeamId());
            }
    }
}
