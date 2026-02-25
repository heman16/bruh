import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';;

@Injectable({
  providedIn: 'root'
})
export class ImageSerivceService {
  
  private commonPath = '../assets/images/';
  
  getImageUrl(employeeId: string, skill: string): Observable<string> {
    const primaryImagePath = `${this.commonPath}${employeeId}.png`;
    
    return this.checkImageExists(primaryImagePath).pipe(
      map(exists => {
        if (exists) {
          return `url(${primaryImagePath})`;
        } else {
          // If primary image doesn't exist, use fallback based on skill
          return `url(${this.getFallbackImageBySkill(skill)})`;
        }
      })
    );
  }
  
  private getFallbackImageBySkill(skill: string): string {
    switch(skill) {
      case 'Batsman':
        return `${this.commonPath}batter.jpg`;
      case 'All Rounder':
        return `${this.commonPath}allrounder.jpg`;
      case 'Fielder/Wicket Keeper':
        return `${this.commonPath}keeper.jpg`;
      case 'Bowler':
        return `${this.commonPath}bowler.avif`;
      default:
        return `${this.commonPath}default-player.jpg`; // Add a default fallback
    }
  }
  
  private checkImageExists(url: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const img = new Image();
      
      img.onload = () => {
        observer.next(true);
        observer.complete();
      };
      
      img.onerror = () => {
        observer.next(false);
        observer.complete();
      };
      
      img.src = url;
    });
  }
}