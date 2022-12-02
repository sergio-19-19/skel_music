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
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };

 constructor(private router:Router,private storage:Storage) { }
 finish(){
  this.storage.create();
  this.storage.set("isIntroshowed", true);
  this.router.navigateByUrl("/login");
 }

  ngOnInit() {}

}
