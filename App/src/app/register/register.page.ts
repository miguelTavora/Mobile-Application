import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../classes/countryInfo';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { FireserviceService} from '../services/fireservice.service'; 
import { Profile } from '../classes/profile'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  countrys: string[] = new CountryInfo().countrys;
  districts = new CountryInfo().districts;

  countrySelected: string = "Country";
  districtSelected: string = "District";

  showCountry: string = "dropdown-content";
  showDistrict: string = "dropdown-content";

  arrowDownCountry: string = "arrow-down";
  arrowDownDistricts: string = "arrow-down";

  info = {
    email: '',
    password:  '',
    confirmPassword:  '',
    postalCode: '',
    address: ''
  };

  // to show warnings when not written
  warnings: boolean[] = [false, false, false, false, false, false, false];

  errorMessage: boolean = false;
  successMessage: boolean = false;

  users: Profile;

  constructor(private authService: AuthService,
          private router: Router,
          private fireservice: FireserviceService) { }

  ngOnInit() {
  }

  ShowCountrys() {
    if(this.showCountry == "dropdown-content") {
      this.showCountry = "dropdown-show";
    }
    else {
      this.showCountry = "dropdown-content";
    }
    this.arrowDownCountry = (this.arrowDownCountry == "arrow-down" ? "arrow-up" : "arrow-down");
  }

  ShowDistricts() {
    if(this.showDistrict == "dropdown-content") {
      this.showDistrict = "dropdown-show";
    }
    else {
      this.showDistrict = "dropdown-content";
    }
    this.arrowDownDistricts = (this.arrowDownDistricts == "arrow-down" ? "arrow-up" : "arrow-down");
  }

  ChangeCountry(country: string) {
    this.countrySelected = country;
  }

  ChangeDistrict(district: string) {
    this.districtSelected = district;
  }

  Submit() {
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

    // verify confirm password
    if(this.info.confirmPassword.length < 6 || this.info.confirmPassword != this.info.password) {
      this.warnings[2] = true;
      return;
    }
    else {
      this.warnings[2] = false;
    }

    // verify country
    if(this.countrySelected == "Country") {
      this.warnings[3] = true;
      return;
    }
    else {
      this.warnings[3] = false;
    }

    // verify district
    if(this.districtSelected == "District") {
      this.warnings[4] = true;
      return;
    }
    else {
      this.warnings[4] = false;
    }

    if(this.info.postalCode.length < 4) {
      this.warnings[5] = true;
      return;
    }
    else {
      this.warnings[5] = false;
    }
    if(this.info.address.length < 4) {
      this.warnings[6] = true;
      return;
    }
    else {
      this.warnings[6] = false;
    }

    this.CreateAuth();
  }

  CreateAuth() {
    
    this.authService.doRegister(this.info) .then(res => {
      console.log(res);
      let profile: Profile = {email: this.info.email, country: this.countrySelected, 
      district: this.districtSelected, postalCode: this.info.postalCode, address: this.info.address,photo: ""};

      this.fireservice.setProfile(profile);
      
      this.errorMessage = false; 
      this.successMessage = true;

    }, err => {
      console.log(err);
      this.errorMessage = true; 
      this.successMessage = false; 
    })
  }

  GoToLogin() {
    this.router.navigate(['/login-email']);
  }

}
