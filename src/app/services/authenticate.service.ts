import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) {
    this.storage.create();
   }

  async loginUser(credential) {
    const user = await this.storage.get("user");
    return new Promise((accept, reject) => {
      if (
        credential.password == "12345678"
      ) {
        accept("Login correcto");
      } else {
        reject("login incorrecto");
      }
    });
  }
  registerUser(userData){
    userData.password = btoa(userData.password);
    userData.passwordConfirm = btoa(userData.passwordConfirm)
    return this.storage.set('user',userData);
  }
}

