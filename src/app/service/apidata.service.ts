import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  stateWiseApi = "https://api.covid19india.org/data.json";
  distWiseApi = "https://api.covid19india.org/state_district_wise.json";
  constructor(public $http:HttpClient) { }


  getStateData(){
   return this.$http.get(this.stateWiseApi);
  }
  getDistData(){
    return this.$http.get(this.distWiseApi);
  }


}
