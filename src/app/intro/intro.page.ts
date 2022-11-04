import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOps = {
    initialSlide: 0,
    slidesPerview:1,
    centeredSlides:true,
    speed:400
  };

 constructor(private router:Router,private storage:Storage) { }
 finish(){
  this.storage.create();
  this.storage.set("isIntroshowed", true);
  this.router.navigateByUrl("/login");
 }

  ngOnInit() {}

}
