import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private hhtpClient:HttpClient) { }

  GetTeamData():Observable<any>{
    return this.hhtpClient.get('https://jsonblob.com/api/jsonblob/01d30d08-f3b9-11eb-b05a-53ea1e8453f3')
  }//data from JSON
}
