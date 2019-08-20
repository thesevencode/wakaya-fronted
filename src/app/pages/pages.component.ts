import { Component, OnInit } from '@angular/core';
// import { UserService } from '../services/service.index';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(
    // public _userService: UserService
  ) { }

  ngOnInit() {
  }
  logout() {
    // this._userService._logout();
  }

}
