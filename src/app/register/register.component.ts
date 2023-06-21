import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private registerservices:RegisterService){}
  Username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  email = new FormControl('', [Validators.email, Validators.minLength(6)]);
  Password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  login(){
    this.registerservices.register(this.Username.value??'',this.email.value??'',)
  }
}
