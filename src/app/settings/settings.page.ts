import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraResultType, CameraSource,Camera} from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  userImage = "assets/imagenes/checho.jpg";
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private router : Router) {}


  async takePhoto(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustUrl(
      image && image.dataUrl);
      console.log(image);
  }
  backmenu(){
    this.router.navigateByUrl("/menu")

  }
}
