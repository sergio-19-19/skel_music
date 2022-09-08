import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators,FormControl} from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
        Validators.required,
        Validators.pattern("expresion regular")
        ])
        )  
    });
   }

  ngOnInit() {}
}
