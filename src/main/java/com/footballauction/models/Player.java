package com.footballauction.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "players")
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString(exclude = "team")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long player_id;

    @Column(name = "player_name")
    private String player_name;

    @Column(name = "email")
    private String email;

    @Column(name = "category")
    private String category;

    @Column(name = "participate_zbcl")
    private Boolean participateInZBCL;

    @Column(name = "played_before")
    private Boolean playedBefore;

    @Column(name = "primary_skill")
    private String primarySkill;

    @Column(name = "day1")
    private Boolean day1;

    @Column(name = "day2")
    private Boolean day2;

    @Column(name = "day3")
    private Boolean day3;

    @Column(name = "day4")
    private Boolean day4;

    @Column(name = "cricket_frequency")
    private String cricketFrequency;

    @Column(name = "contact")
    private Long contact;

    @Column(name = "experience")
    private String experience;

    @Column(name = "position")
    private String position;

    @Column(name = "rating")
    private String rating;

    @Column(name = "description",columnDefinition = "TEXT")
    private String description;

    @Column(name = "availability",columnDefinition = "TEXT")
    private String availability;

    @Column(name = "gender")
    private String gender;

    @Column(name = "teamId")
    private Long teamId;

    @Column(name = "base_price")
    private Double basePrice;

    @Column(name = "employeeId")
    private String employeeId;

    @Column(name = "sold_price")
    private Double soldPrice;

    @Column(name = "cricket")
    private String cricket;

    @Column(name = "chess")
    private String chess;

    @Column(name = "carrom")
    private String carrom;

    @Column(name = "pool")
    private String pool;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teamId",insertable=false,updatable=false)
    @JsonIgnore
    private Team team;

    public Long getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(Long player_id) {
        this.player_id = player_id;
    }

    public String getPlayer_name() {
        return player_name;
    }

    public void setPlayer_name(String player_name) {
        this.player_name = player_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean getParticipateInZBCL() {
        return participateInZBCL;
    }

    public void setParticipateInZBCL(Boolean participateInZBCL) {
        this.participateInZBCL = participateInZBCL;
    }

    public Boolean getPlayedBefore() {
        return playedBefore;
    }

    public void setPlayedBefore(Boolean playedBefore) {
        this.playedBefore = playedBefore;
    }

    public String getPrimarySkill() {
        return primarySkill;
    }

    public void setPrimarySkill(String primarySkill) {
        this.primarySkill = primarySkill;
    }

    public Boolean getDay1() {
        return day1;
    }

    public void setDay1(Boolean day1) {
        this.day1 = day1;
    }

    public Boolean getDay2() {
        return day2;
    }

    public void setDay2(Boolean day2) {
        this.day2 = day2;
    }

    public Boolean getDay3() {
        return day3;
    }

    public void setDay3(Boolean day3) {
        this.day3 = day3;
    }

    public Boolean getDay4() {
        return day4;
    }

    public void setDay4(Boolean day4) {
        this.day4 = day4;
    }

    public String getCricketFrequency() {
        return cricketFrequency;
    }

    public void setCricketFrequency(String cricketFrequency) {
        this.cricketFrequency = cricketFrequency;
    }

    public Long getContact() {
        return contact;
    }

    public void setContact(Long contact) {
        this.contact = contact;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }


    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }


    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Double getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(Double basePrice) {
        this.basePrice = basePrice;
    }

    public Double getSoldPrice() {
        return soldPrice;
    }

    public void setSoldPrice(Double soldPrice) {
        this.soldPrice = soldPrice;
    }

    public String getCricket() {
        return cricket;
    }

    public void setCricket(String cricket) {
        this.cricket = cricket;
    }

    public String getChess() {
        return chess;
    }

    public void setChess(String chess) {
        this.chess = chess;
    }

    public String getCarrom() {
        return carrom;
    }

    public void setCarrom(String carrom) {
        this.carrom = carrom;
    }

    public String getPool() {
        return pool;
    }

    public void setPool(String pool) {
        this.pool = pool;
    }
}
