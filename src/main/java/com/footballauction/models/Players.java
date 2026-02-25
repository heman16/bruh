package com.footballauction.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "players_new")
@Data
public class Players {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "gender")
    private String gender;

    @Column(name = "category")
    private String category;

    @Column(name = "emp_id")
    private String employeeId;

    @Column(name = "zs_mail_id")
    private String zsMailId;

    @Column(name = "contact_number")
    private String contactNumber;

    @Column(name = "participate_zbcl")
    private Boolean participateInZBCL;

    @Column(name = "played_before")
    private Boolean playedBefore;

    @Column(name = "primary_skill")
    private String primarySkill;

    @Column(name = "self_rating")
    private Integer selfRating;

    @Column(name = "availability_2nd_march")
    private Boolean availability2ndMarch;

    @Column(name = "availability_3rd_march")
    private Boolean availability3rdMarch;

    @Column(name = "availability_9th_march")
    private Boolean availability9thMarch;

    @Column(name = "availability_10th_march")
    private Boolean availability10thMarch;

    @Column(name = "comments", columnDefinition = "TEXT")
    private String comments;

    @Column(name = "cricket_frequency")
    private String cricketFrequency;

    @Column(name = "sold_price")
    private Integer soldPrice;

    @Column(name = "base_price")
    private Integer base_price;

    @ManyToOne
    @JoinColumn(name = "teamId",insertable=false,updatable=false)
    @JsonBackReference
    private Team team;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getZsMailId() {
        return zsMailId;
    }

    public void setZsMailId(String zsMailId) {
        this.zsMailId = zsMailId;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
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

    public Integer getSelfRating() {
        return selfRating;
    }

    public void setSelfRating(Integer selfRating) {
        this.selfRating = selfRating;
    }

    public Boolean getAvailability2ndMarch() {
        return availability2ndMarch;
    }

    public void setAvailability2ndMarch(Boolean availability2ndMarch) {
        this.availability2ndMarch = availability2ndMarch;
    }

    public Boolean getAvailability3rdMarch() {
        return availability3rdMarch;
    }

    public void setAvailability3rdMarch(Boolean availability3rdMarch) {
        this.availability3rdMarch = availability3rdMarch;
    }

    public Boolean getAvailability9thMarch() {
        return availability9thMarch;
    }

    public void setAvailability9thMarch(Boolean availability9thMarch) {
        this.availability9thMarch = availability9thMarch;
    }

    public Boolean getAvailability10thMarch() {
        return availability10thMarch;
    }

    public void setAvailability10thMarch(Boolean availability10thMarch) {
        this.availability10thMarch = availability10thMarch;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getCricketFrequency() {
        return cricketFrequency;
    }

    public void setCricketFrequency(String cricketFrequency) {
        this.cricketFrequency = cricketFrequency;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Integer getSoldPrice() {
        return soldPrice;
    }

    public void setSoldPrice(Integer soldPrice) {
        this.soldPrice = soldPrice;
    }

    public Integer getBase_price() {
        return base_price;
    }

    public void setBase_price(Integer base_price) {
        this.base_price = base_price;
    }
}
