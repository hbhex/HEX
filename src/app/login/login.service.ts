import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private backend:BackendService) { }
  login(Username:string,Password:string){
    console.log(Username);
    console.log(Password);
  }
}
