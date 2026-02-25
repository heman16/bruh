package com.footballauction.Repository;

import com.footballauction.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findAllByTeamId(Long teamId);
    List<Player> findAllByOrderByGenderAsc();

    @Query("SELECT p FROM Player p WHERE p.player_name LIKE %:name%")
    List<Player> findPlayersByPlayerNameContaining(String name);
}
