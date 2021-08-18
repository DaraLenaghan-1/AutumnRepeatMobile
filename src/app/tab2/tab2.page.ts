import { Component, OnInit } from '@angular/core';
import {TeamService} from '../Service/team.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  teamData:any [];
    constructor(private teamService:TeamService) {}

    ngOnInit(){ //on start of app, data will be read in from the team service.
      this.teamService.GetTeamData().subscribe(
        (data)=>{
          this.teamData = data.Squad;
          console.log(this.teamData); 
        }
      );
    }

}
