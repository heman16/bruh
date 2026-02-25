package com.footballauction.Repository;

import com.footballauction.models.Player;
import com.footballauction.models.Players;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlayerNewRepository extends JpaRepository<Players, Long> {
    List<Players> findAllByOrderByGenderAsc();
}
