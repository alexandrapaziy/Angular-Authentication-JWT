import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = false;
  worker = null;

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.worker = this.login.getWorker();
    this.login.loginStatusSubject.asObservable().subscribe(
      (_data: any) => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.worker = this.login.getWorker();
      });
  }

  public logout() {
    this.login.logout();
    window.location.reload();
  }

}
