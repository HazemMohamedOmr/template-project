import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user1:User

  constructor() { 
    this.user1 = {
      id: 1,
      firstName: "Hazem",
      lastName: "Mohamed",
      email: "Non.of.ur.business@gmail.com"
    }

  }
}
