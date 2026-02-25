import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {
  displayedColumns: string[] = ['name', 'skill', 'position','sold-price'];
  name : string ="";

  constructor(private dialogRef: MatDialogRef<MessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // console.log("team-data-modal",this.data)
    this.name = this.data[0].team_name;
  }

  close() {
    this.dialogRef.close();
    
  }
  
}