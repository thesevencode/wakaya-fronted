import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    // public _userService: UserService
  ) { }

  ngOnInit() {
  }
  logout() {
    // this._userService._logout();
  }

}
