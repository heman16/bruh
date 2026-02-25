import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.css']
})
export class TeamModalComponent implements OnInit {
  displayedColumns: string[] = ['name', 'skill', 'position','sold-price'];
  name : string ="";

  constructor(private dialogRef: MatDialogRef<TeamModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log("team-data-modal",this.data)
    this.name = this.data[0].team_name;
  }

  close() {
    this.dialogRef.close();
    
  }

}
