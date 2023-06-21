import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register(arg0: string, arg1: string) {
  throw new Error('Method not implemented.');
  }
  constructor(private backend:BackendService) { }
  login(Username:string,Password:string,email:string){
    console.log(Username);
    console.log(email);
    console.log(Password);
  }
}
