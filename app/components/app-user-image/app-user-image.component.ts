import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-image',
  template: `<div class="user-image" [ngStyle]="{'background-image': 'url(' + imageUrl + ')'}"></div>`,
  styles: [`
    .user-image {
      background-size: contain;
      background-position: center;
    }
  `]
})
export class AppUserImageComponent implements OnInit {
  @Input() employeeId!: string;
  @Input() skill!: string;

  imageUrl: string = '';

  ngOnInit() {
    this.loadImage();
  }

  async loadImage() {
    this.imageUrl = await this.getImageName(this.employeeId, this.skill);
  }

  async getImageName(employeeId: string, skill: string): Promise<string> {
    const commonPath = `../assets/images/`;
    let imagePath = `${commonPath}${employeeId}.jpg`;

    try {
      const response = await fetch(imagePath, { method: 'HEAD' });
      if (response.ok) {
        return imagePath;
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }

    return this.getSkillBasedImage(skill, commonPath);
  }

  getSkillBasedImage(skill: string, commonPath: string): string {
    switch (skill) {
      case 'Batsman': return `${commonPath}batter.jpg`;
      case 'All Rounder': return `${commonPath}allrounder.jpg`;
      case 'Fielder/Wicket Keeper': return `${commonPath}keeper.jpg`;
      case 'Bowler': return `${commonPath}bowler.avif`;
      default: return `${commonPath}default.jpg`;
    }
  }
}