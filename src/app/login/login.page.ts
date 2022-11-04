import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators,} from '@angular/forms';
import { AuthenticateService } from "../services/authenticate.service";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type:"required",message:""}
    ],
    password: [
      { type:"required",message:""}
    ]
  };
  errorMessage: string ="";
  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthenticateService,
    private router:Router,
    private storage:Storage
    ){
    this.loginForm = this.formBuilder.group({
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

  ngOnInit() {}
  loginUser(credentials){
    this.authService.loginUser(credentials).then(res => {
     this.errorMessage = "";
     this.storage.create();
     this.storage.set("isUserLoggedIn", true);
     this.router.navigate(['/home']);
    }).catch(err=>{
      this.errorMessage = err;
    });

  }
  goToRegister(){
    this.router.navigate(['/register']);
  }
}
