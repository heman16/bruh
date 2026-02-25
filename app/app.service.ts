import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(
    private http: HttpClient) {}

    getAllTeams(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:8080/team');
    }

    getAllPlayers(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:8080/player');
    }

    updatePlayerTeam(teamId:any): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/team/player',teamId);
    }

    updateTeamBalance(teamData:any): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/team/updateBalance',teamData);
    }

    getAllPlayersByTeam(teamId:any): Observable<any[]> {
      return this.http.get<any[]>(`http://localhost:8080/team/${teamId}`);
    }

    updatePlayerAndBalance(balanceAndPlayerUpdate:any): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/team/updatePlayerAndBalance',balanceAndPlayerUpdate);
    }

    releasePlayerAndUpdateBalance(playerId:any): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/team/releasePlayer',playerId);
    }
    

}
