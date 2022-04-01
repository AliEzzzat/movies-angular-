import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private _AuthServes: AuthService) {}

  ngOnInit(): void {
    this._AuthServes.userData.subscribe(() => {
      if (this._AuthServes.userData.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
  callLogOut() {
    this._AuthServes.logOut();
  }
}
