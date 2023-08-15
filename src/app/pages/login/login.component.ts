import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private snack: MatSnackBar,
    private login: LoginService,
    private router: Router) { }

  hide = true;

  public loginData = {
    email: '',
    password: ''
  }

  formSubmit() {
    if (this.loginData.email.trim() == '' || this.loginData.email == null) {
      this.snack.open("Email is required", '', {
        duration: 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("Password is required", '', {
        duration: 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (_data: any) => {
        console.log('success');
        console.log(_data);

        this.login.loginWorker(_data.token);
        this.login.getCurrentWorker().subscribe(
          (_worker: any) => {
            this.login.setWorker(_worker);
            console.log(_worker);

            if (this.login.getWorkerPosition() == 'DIRECTOR') {
              this.router.navigate(['director-dashboard']);
              this.login.loginStatusSubject.next(true);
            } else if (this.login.getWorkerPosition() == 'WORKER') {
              this.router.navigate(['worker-dashboard']);
              this.login.loginStatusSubject.next(true);
            } else {
              this.login.logout();
            }
          });
      },
      (_error: any) => {
        console.log('Error');
        console.log(_error);
        this.snack.open('Invalid details, try again', '', {
          duration: 1000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      }
    );


  }
}