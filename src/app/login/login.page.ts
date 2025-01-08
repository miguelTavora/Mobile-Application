import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Profile } from '../classes/profile';
import { FireserviceService} from '../services/fireservice.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  warning: boolean = false;

  constructor(private router: Router, private authService: AuthService,
              private fireservice: FireserviceService) { }

  ngOnInit() {
  }

  GoToLoginEmail() {
    this.router.navigate(['/login-email']);
  }

  GoogleLogin() {
    this.authService.doLoginGoogle().then(res => {
      console.log("enail:"+res.additionalUserInfo.profile.email);
      console.log("new user: "+res.additionalUserInfo.isNewUser);
      if(res.additionalUserInfo.isNewUser) {
        let newProfile:Profile = {email: res.additionalUserInfo.profile.email, country: "None", 
                          district: "None", postalCode: "None", address: "None",
                          photo: ""};

        this.fireservice.setProfile(newProfile);
      }
      console.log(res);

      this.router.navigate(['/tabs']);
    }, 
      err => {this.warning = true; 
        console.log(err)
    });
  }

}
