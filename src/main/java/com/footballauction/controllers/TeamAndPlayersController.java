package com.footballauction.controllers;

import com.footballauction.models.BalanceAndPlayerUpdate;
import com.footballauction.models.Player;
import com.footballauction.models.Team;
import com.footballauction.service.TeamAndPlayerService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.net.URL;
import java.util.List;

@RestController
@CrossOrigin
public class TeamAndPlayersController {
    @Autowired
    TeamAndPlayerService teamAndPlayerService;

    @GetMapping("team")
    public List<Team> getAllTeams(){
        return teamAndPlayerService.getAllTeams();
    }

    @GetMapping("player")
    public List<Player> getAllPlayers(){
        return teamAndPlayerService.getAllPlayers();
    }


    @GetMapping("player/{name}")
    public List<Player> getPlayersByName(@PathVariable String name){
        return teamAndPlayerService.getPlayersByName(name);
    }


    @GetMapping("team/{teamID}")
    public List<Player> getAllPlayersByTeamID(@PathVariable Long teamID){
        return teamAndPlayerService.getAllPlayersByTeamID(teamID);
    }

    @PostMapping("team/player")
    public Player updatePlayer(@RequestBody Player player) {
        System.out.println("here");
        return teamAndPlayerService.updatePlayer(player);
    }

    @PostMapping("team/updateBalance")
    public Team updateTeamBalance(@RequestBody Team team) {
        return teamAndPlayerService.updateTeamBalance(team);
    }


    @PostMapping("team/updatePlayerAndBalance")
    public void updatePlayerAndBalance(@RequestBody BalanceAndPlayerUpdate player) {
        teamAndPlayerService.updateDetails(player);
//        return teamAndPlayerService.updatePlayer(player);
    }

    @PostMapping("team/releasePlayer")
    public void releasePlayer(@RequestBody Long player) {
        teamAndPlayerService.releasePlayer(player);
//        return teamAndPlayerService.updatePlayer(player);
    }

    @GetMapping("/ui")
    public ResponseEntity<Resource> runUiCode() throws NotFoundException {
        String path = "browser/index.html";
        Resource resource = new ClassPathResource(path);

        if (!resource.exists()) {
            throw new NotFoundException(path);
        }

        return ResponseEntity.ok()
                .contentType(MediaType.TEXT_HTML)
                .body(resource);
    }

    @GetMapping("/test")
    public String samplecode() throws NotFoundException {
        return "test";
    }

    @GetMapping("/{path:.*}")
    public ResponseEntity<Resource> get(@PathVariable("path") String path) {

        String fullPath = "browser/" + path;
        Resource resource = new ClassPathResource(fullPath);

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        // Let Spring determine content type automatically
        String contentType = determineContentType(fullPath);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
    }

    private String determineContentType(String filePath) {
        String extension = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();

        return switch (extension) {
            case "html", "htm" -> "text/html";
            case "css" -> "text/css";
            case "js" -> "application/javascript";
            case "json" -> "application/json";
            case "png" -> "image/png";
            case "jpg", "jpeg" -> "image/jpeg";
            case "gif" -> "image/gif";
            case "svg" -> "image/svg+xml";
            case "ico" -> "image/x-icon";
            case "pdf" -> "application/pdf";
            case "txt" -> "text/plain";
            default -> "application/octet-stream";
        };
    }


}
