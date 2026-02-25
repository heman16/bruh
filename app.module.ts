import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamModalComponent } from './components/team-modal/team-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppUserImageComponent } from './components/app-user-image/app-user-image.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { RandomPlayerComponent } from './components/random-player/random-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamModalComponent,
    AppUserImageComponent,
    MessageModalComponent,
    RandomPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
