import { Component, OnInit } from '@angular/core';
import { Storage  } from '@ionic/storage';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
myNation:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) {}

  //Retrieves the users nation details from storage
  ngOnInit(){
    this.storage.get("nation")
    .then((data)=>{
      this.myNation=data;
    })
    .catch()

  }

  updateNation(){
    this.storage.set('nation',this.myNation)
    .then(()=>{
      this.navCtrl.navigateBack('/tab1');
    })
    .catch()
  }
}
