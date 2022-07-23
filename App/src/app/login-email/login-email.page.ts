import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.page.html',
  styleUrls: ['./login-email.page.scss'],
})
export class LoginEmailPage implements OnInit {

  warnings: boolean[] = [false, false, false];

  info = {
    email: '',
    password:  ''
  };

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  GoToRegister() {
    this.router.navigate(['/register']);
  }

  GoToHomepage() {
    // verify email
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    if(!regex.test(this.info.email)) {
      this.warnings[0] = true;
      return;
    }
    else {
      this.warnings[0] = false;
    }

    // verify password
    if(this.info.password.length < 6) {
      this.warnings[1] = true;
      return;
    }
    else {
      this.warnings[1] = false;
    }

    this.login(this.info);

    //this.router.navigate(['/tabs']);
  }

  login(info) {
    console.log(info);
    let x = this.authService.doLogin(info).then(res => {
      console.log("FEZ LOGIN");
      this.router.navigate(['/tabs']);
    }, 
      err => {this.warnings[2] = true; 
        console.log(err)
    }) 
  }

}
