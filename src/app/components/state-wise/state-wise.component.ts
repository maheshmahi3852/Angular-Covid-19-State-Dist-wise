import { Component, OnInit } from '@angular/core';

import{ ApidataService } from 'src/app/service/apidata.service'

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent implements OnInit {
  allData: any;
  stateWiseData: string[];

  constructor(public api:ApidataService) { }

  ngOnInit(): void {
    this.allStateData();
  }

allStateData(){
  this.api.getStateData().subscribe(data => {

    if(data && data['statewise']){
      this.stateWiseData = data['statewise'];
      console.log(this.allData);
      this.stateWiseData.splice(0,1);
    }

  } )
}


}
