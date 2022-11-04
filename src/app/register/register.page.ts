import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  registerForm: FormGroup;
  validation_messages = {
    nombre: [
      { type:"required",message:""}
    ],
    apellido: [
      { type:"required",message:""}
    ],
    email: [
      { type:"required",message:""}
    ],
    contraseña: [
      { type:"required",message:""}
    ]
  };
  errorMessage: string ="";

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthenticateService,
    private navCtrl:NavController,
    private Storage:Storage)
     {
    this.Storage.create();
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl(
        "",
          Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$")
        ])
      ),
       apellido: new FormControl(
        "",
         Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(25),
         Validators.pattern("[a-zA-zÑñáéíóúüÁÉÍÓÚÜ\s]+$")
      ])

      ),
      email: new FormControl(
       "",
        Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ])
),
     password: new FormControl(
       "",
        Validators.compose([
        Validators.required,
        Validators.minLength(6)
  ])
)

    });
  }
  register(userData){
    this.authService.registerUser(userData).then(()=>{
      this.navCtrl.navigateBack("/login");
    })
    console.log("hola acabas de registrarte")
  }
  goToLogin(){

    this.navCtrl.navigateBack("/login");
  }
}
