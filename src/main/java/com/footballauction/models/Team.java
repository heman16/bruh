package com.footballauction.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "team")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teamId;

    @Column(name = "team_captain")
    private String team_captain;

    @Column(name = "team_name")
    private String team_name;

    @Column(name = "balance")
    private Float balance;

    @OneToMany(mappedBy = "team")
    @JsonManagedReference
    private List<Player> player;

    @OneToMany(mappedBy = "team")
    @JsonManagedReference
    private List<Players> players;

    public Long getTeamId() {
        return teamId;
    }

    public List<Players> getPlayers() {
        return players;
    }

    public void setPlayers(List<Players> players) {
        this.players = players;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public String getTeam_captain() {
        return team_captain;
    }

    public void setTeam_captain(String team_captain) {
        this.team_captain = team_captain;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public Float getBalance() {
        return balance;
    }

    public void setBalance(Float balance) {
        this.balance = balance;
    }

    public List<Player> getPlayer() {
        return player;
    }

    public void setPlayer(List<Player> player) {
        this.player = player;
    }
}
