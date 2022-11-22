import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  myUser?: User;

  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.myUser = this._user.user1;
  }

}
