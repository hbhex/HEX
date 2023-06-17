import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginservices:LoginService){}
  Username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  Password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  login(){
    this.loginservices.login(this.Username.value??'',this.Password.value??'') 
  }
}
