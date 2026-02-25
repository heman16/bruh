import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-random-player',
  templateUrl: './random-player.component.html',
  styleUrls: ['./random-player.component.css']
})
export class RandomPlayerComponent implements OnInit {

  @Input() data!: Array<any>;
  categoryMap: Map<string, string[]> = new Map();
  selectedCategory!: string; 
  randomPlayer!: string;

  get categoryKeys(): string[] {
    return Array.from(this.categoryMap.keys());
  }

  onCategoryChange() {
    console.log('Selected Category:', this.selectedCategory);
  }

  constructor() { }

  ngOnInit(): void {
    this.processPlayers()
  }

  processPlayers() {
    const filteredPlayers = this.data.filter(player => player.teamId === null);

    this.categoryMap = filteredPlayers.reduce((map, player) => {
      if (!map.has(player.category)) {
        map.set(player.category, []);
      }
      map.get(player.category)?.push(player.player_name);
      return map;
    }, new Map<string, string[]>());
  }

  onButtonClick(){
    const players = this.categoryMap.get(this.selectedCategory) || [];
    if (players.length > 0) {
      this.randomPlayer = players[Math.floor(Math.random() * players.length)];
      console.log('Random Player:', this.randomPlayer);
    } else {
      this.randomPlayer = 'No players available';
    }

    console.log(this.randomPlayer)
  }

}
