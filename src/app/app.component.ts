import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DistWiseComponent } from './components/dist-wise/dist-wise.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog() {

    const dialogRef = this.dialog.open(DistWiseComponent,{
      height: '60%',
      width: '50%'
    });


  }


}
