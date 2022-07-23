import { Component, OnInit } from '@angular/core';
import { Profile } from '../classes/profile';
import { PROFILES } from '../classes/profileEx';
import { Router } from '@angular/router';
import { FireserviceService} from '../services/fireservice.service'; 
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ADMIN_EMAIL: string[] = ["miguelool98765@gmail.com", "aa@gmail.com"];
  profile: Profile= PROFILES[1];
  address1: string;
  address2: string;

  constructor(private router: Router,
              private fireservice: FireserviceService,
              private authService: AuthService,) {}

  ngOnInit() {
    this.ObtainProfile();

  }

  ChangeEditProfile() {
    this.router.navigate(['/tabs/edit-profile']);
  }

  ChangeStock() {
    this.router.navigate(['/tabs/change-stock']);
  }

  ObtainProfile() {
    let profileRes: Profile;

    let result = this.fireservice.getProfile().subscribe(data => { 
      let email = data.payload.data()['email'];
      let country = data.payload.data()['country'];
      let district = data.payload.data()['district'];
      let postalCode = data.payload.data()['postalCode'];
      let address = data.payload.data()['address'];
      let photo = data.payload.data()['photo'];
      profileRes = {email: email, country: country, district: district, postalCode: postalCode,
         address: address,photo: photo};
      
      console.log("perfil: "+JSON.stringify(profileRes));
      
      this.profile = profileRes;
      this.SetLimitAddress();
      //result.unsubscribe();
    });
    
  }

  SetLimitAddress() {
    let address = this.profile.address;
    console.log("size: "+address.length);
    if(address.length > 24) {
      this.address1 = address.slice(0, 24);
      this.address2 = address.slice(24, address.length);
    }
    else {
      this.address1 = address.slice(0, address.length);
      this.address2 = "";
    }
  }

  Logout() {
    this.authService.doLogout();
    this.router.navigate(['/login']);
  }


}
