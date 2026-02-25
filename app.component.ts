import { Component, ElementRef } from '@angular/core';
import { AppService } from './app.service';
import { MatDialog } from '@angular/material/dialog';
import { TeamModalComponent } from './components/team-modal/team-modal.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  title = 'Football League';
  lowest_player_bid: number = 1;
  minimun_player: number = 9;
  index: number = 0;
  categoryMap: Map<string, string[]> = new Map();
  selectedTeamIndex: number = -1;
  playerData: Array<any> = [];
  playerEntries: { category: string, count: number }[] = [];
  selectedPlayerData: Array<{
    contact: string;
    description: string;
    email: string;
    player_id: number;
    player_name: string;
    primarySkill: string;
    price: number;
    rating: string;
    soldPrice: number;
    teamId: number;
    experience: string;
    employeeId: string;
    availability: string;
    day1: boolean;
    day2: boolean;
    day3: boolean;
    day4: boolean;
    basePrice: number;
    participateInZBCL : boolean;
    cricket : string,
    chess: string,
    pool: string,
    carrom : string,
  }> = new Array;
  teamData: Array<{
    balance: number;
    teamId: number;
    team_captain: string;
    team_name: string;
    player: Player[];
    primarySkill: string
  }> = [];
  selectedTeam: {
    balance: number;
    teamId: number;
    team_captain: string;
    team_name: string;
  } = {
      balance: 0,
      teamId: 0,
      team_captain: "",
      team_name: ''
    };

  balanceAndPlayerUpdate: {
    playerId: number;
    team_id: number;
    amount: number;

  } = {
      playerId: 0,
      team_id: 0,
      amount: 0
    };

  teamPlayersDetails: Array<{
    contact: string;
    description: string;
    email: string;
    player_id: number;
    player_name: string;
    position: string;
    price: number;
    rating: string;
    soldPrice: number;
    teamId: number;
    experience: string;
    employeeId: string;
    availability: string;
  }> = new Array;

  selectedTeamName: string = '';

  options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];

  selectedOption: string = this.options[0].value;

  isViewTeamsClicked: boolean = false;
  teamD: Array<{}> = [];
  playerInfo: Array<{}> = [];
  isSold: boolean = true;
  teamNames: string[] = [];
  isLoading: boolean = false;
  constructor(
    private appService: AppService,
    private eRef: ElementRef,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.viewTeams(false);
    this.getAllPlayer();
    console.log("map",this.categoryMap)

  }

  processPlayers() {
    const filteredPlayers = this.playerData.filter(player => player.teamId === null);

    this.categoryMap = filteredPlayers.reduce((map, player) => {
      if (!map.has(player.category)) {
        map.set(player.category, []);
      }
      map.get(player.category)?.push(player.player_name);
      return map;
    }, new Map<string, string[]>());

    this.playerEntries = Array.from(this.categoryMap, ([category, players]) => ({
      category,
      count: players.length
    }));
  }

  openTeamModal(teamId : any){
    console.log(teamId)
    console.log("openModal");
    const team  = this.teamData.filter(item=> item.teamId == teamId)
    this.dialog.open(TeamModalComponent , {
      width: '600px',
      data: team,
    });
  }

  openErrorMessage(){
    this.dialog.open(MessageModalComponent , {
      width: '400px',
      data: "Bid Price is gereator than Max Bid !!!",
    });
  }

  getAllPlayer() {
    this.appService.getAllPlayers().subscribe(res => {
      this.playerData = res;
      this.selectedPlayerData[this.index] = this.playerData[this.index];
      this.processPlayers();
    })
  }
  searchPlayer: string = '';

  filteredSuggestions: any[] = [];
  showSuggestions: boolean = false;




  filterSuggestions() {

    this.filteredSuggestions = this.playerData.filter((p: any) =>
      p.player_name.toLowerCase().includes(this.searchPlayer.toLowerCase())
    );
    this.showSuggestions = this.filteredSuggestions.length > 0;
  }

  checkIfSold(teamId: any) {
    if (teamId == null) return false;
    return true;
  }

  onValueChange(value: string): void {
    this.selectedTeamName = value
    // Call any method or perform actions here
  }

  selectSuggestion(suggestion: any) {
    console.log("suggestion", suggestion); 
    this.selectedPlayerData = [];
    this.searchPlayer = suggestion.player_name;
    this.selectedPlayerData.push(suggestion)
    this.showSuggestions = false;
  }

  viewTeams(isClickeck: boolean) {
    if (!isClickeck) {
      this.appService.getAllTeams().subscribe(res => {
        this.teamData = res;
      })
    } else {
      this.isViewTeamsClicked = true;
    }
  }


  backToAuctionPage() {
    this.isViewTeamsClicked = false;
  }

  upBid = () => {
    if(this.selectedPlayerData[0].soldPrice<5){
      this.selectedPlayerData[0].soldPrice = this.selectedPlayerData[0].soldPrice + 0.25;
    } else if(this.selectedPlayerData[0].soldPrice>4.75 && this.selectedPlayerData[0].soldPrice<10){
      this.selectedPlayerData[0].soldPrice = this.selectedPlayerData[0].soldPrice + 0.5;
    } else if(this.selectedPlayerData[0].soldPrice>9.5 && this.selectedPlayerData[0].soldPrice<20){
      this.selectedPlayerData[0].soldPrice = this.selectedPlayerData[0].soldPrice + 1;
    } else {
    this.selectedPlayerData[0].soldPrice = this.selectedPlayerData[0].soldPrice + 2;
    }
  }

  downBid = () => {
    this.selectedPlayerData[0].soldPrice = this.selectedPlayerData[0].soldPrice - 1;
  }

  next = () => {
    let prevIndex = this.index;
    this.index = this.index + 1;
    if (this.index >= 0 && this.index < this.playerData.length) {
      this.selectedPlayerData = [];
      if (this.playerData[this.index]) {
        this.playerData[this.index].sold_price = this.playerData[this.index].price;
        this.selectedPlayerData.push(this.playerData[this.index]);
      }
    } else {
      this.index = prevIndex;
    }
  }

  previous = () => {
    let prevIndex = this.index;
    this.index = this.index - 1;
    if (this.index >= 0 && this.index < this.playerData.length) {
      this.selectedPlayerData = [];
      if (this.playerData[this.index]) {
        this.selectedPlayerData.push(this.playerData[this.index]);
      }
    } else {
      this.index = prevIndex;
    }
  }

  getImageName = (employeeId: any, skill: any) => {
    const commonPath = `../assets/images/`;
    // let updatedName = this.data[this.index].name.replace(' ', '_');
    // this.data[this.index].image = updatedName.toLowerCase();
    let imagePath = commonPath + employeeId + '.png';
    const img = new Image();
    img.src = imagePath;
    if (img.complete) { }
    else {
      if (skill == 'Batsman') {
        imagePath = commonPath + 'batter' + '.jpg'
      }

      if (skill == 'All Rounder') {
        imagePath = commonPath + 'allrounder' + '.jpg'
      }

      if (skill == 'Fielder/Wicket Keeper') {
        imagePath = commonPath + 'keeper' + '.jpg';
      }

      if (skill == 'Bowler') {
        imagePath = commonPath + 'bowler' + '.avif'
      }
    }
    return imagePath;
  }

  checkIFCountExecceds(player:any,teamId:any) {

    console.log(this.teamData);
    let team = this.teamData.filter((item)=> item.teamId == teamId);
    console.log("team",team)
    if(player.rating=='F'){
      const count = team[0].player.filter((item)=> item.rating=='F');
      console.log("countLength",count.length)
      if(count.length==6){
          alert("Max Female Player Bought")
          return true;
      }
    }
    return false;
  }



  selectedTeamData = (teamId: any) => {
    this.selectedTeam = this.teamData.filter(p => p.teamId === teamId)[0];
    this.selectedTeamName = this.selectedTeam.team_name;
  }

  getTeamName = (teamId: any) => {
    if (teamId == 0) return
    this.selectedTeamName = this.teamData?.filter(p => p.teamId === teamId)[0].team_name;
    return this.selectedTeamName;
  }

  mouseEvent = false
  // @HostListener('document:click', ['$event'])
  //   onClickEvent(event: MouseEvent) {
  //     var target = event.target || event.srcElement;
  //     var id = target['id']
  //     if(id)
  //       this.mouseEvent = true;
  //     else
  //       this.mouseEvent = false;
  //   }

  isPlayerSold() {
    return this.selectedPlayerData[0].teamId == null && this.selectedTeamName == ''
  }

  isTeamAssigned(teamId: any) {
    if (teamId == null) return true;
    return false;
  }

 

  sold = () => {
    // debugger


    if (this.selectedTeamName == '') {
      return
    }
    const teamId = parseInt(this.selectedTeamName);
    let toBuy= this.checkIFCountExecceds(this.selectedPlayerData[0],teamId);
    if(toBuy){
      return;
    }
    const team  = this.teamData.filter(team => team.teamId == teamId)
    console.log("teamDetails",team)
    const playerBidPrice =this.selectedPlayerData[0].soldPrice;
    const balance = team[0].balance;
    const maxBid = (balance-((this.minimun_player-team[0].player.length)*this.lowest_player_bid))+this.lowest_player_bid;

    if(playerBidPrice > maxBid){
      // console.log("cantbid ehre")
      this.openErrorMessage()
      return
    }
    
    const tempPlayerId = this.selectedPlayerData[0].player_id;
    this.balanceAndPlayerUpdate.amount = this.selectedPlayerData[0].soldPrice
    this.balanceAndPlayerUpdate.playerId = this.selectedPlayerData[0].player_id;
    this.balanceAndPlayerUpdate.team_id = parseInt(this.selectedTeamName);

    // console.log(this.balanceAndPlayerUpdate)
    //Minus sold price from selected team balance
    this.selectedTeam.balance = this.selectedTeam.balance - this.selectedPlayerData[0].soldPrice;
    this.selectedPlayerData[0].teamId = this.selectedTeam.teamId;

    // this.appService.updateTeamBalance(this.selectedTeam).subscribe(res => {});
    // this.appService.updatePlayerTeam(this.selectedPlayerData[0]).subscribe(res => {
    //   if(res)
    //     this.viewTeams(false);
    // });

    this.appService.updatePlayerAndBalance(this.balanceAndPlayerUpdate).subscribe(res => {
      if (res) { }
      this.appService.getAllPlayers().subscribe(res => {
        this.playerData = res;
        // console.log("playerId",tempPlayerId)
        // console.log("playerData",this.playerData)
        const playerFound: any = this.playerData.filter(item => {
          if (item.player_id === tempPlayerId) {
            this.selectedPlayerData = [];
            this.selectedPlayerData.push(item)
          }
        })
        // this.selectedPlayerData=[];
        // this.selectedPlayerData.push(playerFound)
      })
      // this.selectedPlayer(tempPlayerId)
      this.appService.getAllTeams().subscribe(res => {
        this.teamData = res;
        this.processPlayers()
      })
    });
  }

  // selectedPlayer(playerId:any) {

  //   this.selectedPlayerData =[]
  //   this.playerData.filter(item => {
  //     if(item['playerId']==playerId){
  //       this.selectedPlayerData.push(item);
  //       retur
  //     }
  //   })
  //   z
  // }


  isButtonClickable(): boolean {
    // For example, the button is clickable only when teamId is not null.
    // return this.data.teamId !== null;
    return this.selectedPlayerData[0].teamId != null
  }


  release = (employeeId: any) => {
    console.log("employeeID:::",employeeId)

    this.appService.releasePlayerAndUpdateBalance(employeeId).subscribe(res => {
      if (res) { }
      this.appService.getAllPlayers().subscribe(res => {
        this.playerData = res;
        console.log("playerData",this.playerData)
         this.playerData.filter(item => {
          if (item.player_id === employeeId) {
            console.log("found",item)
            this.selectedPlayerData = [];
            this.selectedPlayerData.push(item)
          }
        })
      })
      this.appService.getAllTeams().subscribe(res => {
        this.teamData = res;
        this.processPlayers();
      })
    });

    // this.selectedTeamData(this.selectedPlayerData[0].teamId)
    // this.selectedTeam.balance = this.selectedTeam.balance + this.selectedPlayerData[0].soldPrice;
    // this.selectedPlayerData[0].teamId = 0;
    // this.selectedPlayerData[0].soldPrice = this.selectedPlayerData[0].price;
    // this.appService.updateTeamBalance(this.selectedTeam).subscribe(res => {});
    // this.appService.updatePlayerTeam(this.selectedPlayerData[0]).subscribe(res => {
    //   if(res){
    //     this.viewTeams(false);
    //   }
    // });

  }

  getTeamPlayersCount(teamId: any) {
    return this.teamData.filter(t => t.teamId == teamId)[0].player.length;
  }

  getAllPlayersInfo(teamId: any) {
    if (this.teamPlayersDetails.length <= 0 || (this.teamPlayersDetails.length > 0 && this.teamPlayersDetails[0].teamId != teamId)) {
      this.appService.getAllPlayersByTeam(teamId).subscribe(res => {
        this.teamPlayersDetails = res;
      })
    }
  }
}




export class Player {
  contact!: string;
  description!: string;
  email!: string;
  player_id!: number;
  player_name!: string;
  primarySkill!: string;
  price!: number;
  rating!: string;
  soldPrice!: number;
  teamId!: number;
  experience!: string;
  employeeId!: string;
  availability!: string;
  day1!: boolean;
  day2!: boolean;
  day3!: boolean;
  day4!: boolean;
  basePrice!: number;
  position!: string;
}