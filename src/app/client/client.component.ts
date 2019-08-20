import { Component, OnInit } from '@angular/core';
// import { UserService } from '../services/service.index';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(
    // public _userService: UserService
  ) { }

  ngOnInit() {
  }
  logout() {
    // this._userService._logout();
  }

}
