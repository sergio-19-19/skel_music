import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private storage: Storage) { }
  loginUser(credential) {
    return new Promise((accept, reject) => {
      if (
        credential.password == '123456'
      ){
        accept('Login Correcto');
      } else {
        reject('      ***** Login Incorrecto *****       ');
      }
    });
  }
  registerUser(userData){
    userData.password = btoa(userData.password);
    return this.storage.set('user',userData);
  }
}

