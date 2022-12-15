import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController,NavController  } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage,
    private router : Router ) {
    this.storage.create();
  }

  ngOnInit() {}

  closeMenu() {
    this.menu.close();
  }
  logout() {
    this.storage.remove("isUserLoggedIn");
    this.navCtrl.navigateRoot("/login");
  }
  gohomeapp(){
    this.router.navigateByUrl("/homeapp")
  }
  gotoSettings(){
    this.router.navigateByUrl("/settings")
  }
  gotoSports(){
    this.navCtrl.navigateRoot("/sports")

  }
}
