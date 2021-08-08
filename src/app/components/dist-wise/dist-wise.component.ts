import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/service/apidata.service';

@Component({
  selector: 'app-dist-wise',
  templateUrl: './dist-wise.component.html',
  styleUrls: ['./dist-wise.component.css']
})
export class DistWiseComponent implements OnInit {
  stateData: any;
  allData: any;
  distData:any;
  selectedState:any;
  listDist: any;
  selectedDist:any;
  selectedDistData:any;
  constructor(public api:ApidataService) { }

  ngOnInit(): void {
    this.allDistData();
  }

selectionChange(event){
this.selectedState = event.value;
this.listDist = Object.keys(this.allData[this.selectedState]['districtData'])
}
getDistDataa(event){
  this.selectedDist = event.value;
  this.selectedDistData = this.allData[this.selectedState]['districtData'][this.selectedDist]
}

  allDistData(){
    this.api.getDistData().subscribe(data => {
      if(data){
        this.allData = data;
       this.stateData = Object.keys(this.allData)
      }
    });
  }

}
