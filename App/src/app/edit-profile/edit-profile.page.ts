import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../classes/countryInfo';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FireserviceService} from '../services/fireservice.service';
import { Profile } from '../classes/profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  countrys: string[] = new CountryInfo().countrys;
  districts = new CountryInfo().districts;

  countrySelected: string = 'Country';
  districtSelected: string = "District";

  showCountry: string = "dropdown-content";
  showDistrict: string = "dropdown-content";

  arrowDownCountry: string = "arrow-down";
  arrowDownDistricts: string = "arrow-down";

  warning: boolean = false;
  clicked: boolean = false;
  
  info = {
    postalCode: '',
    address:  ''
  };

  // warnings when not written
  confirms: boolean[] = [false, false];

  constructor(private router: Router,
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

  ClosePopUp() {
    this.warning = false;
  }

  //TODO aqui implementar alterar a base de dados
  ConfirmPopUp() {
    this.warning = false;

    let profileRes: Profile;

    let result = this.fireservice.getProfile().subscribe(data => { 
      let email = data.payload.data()['email'];
      /*let country = data.payload.data()['country'];
      let district = data.payload.data()['district'];
      let postalCode = data.payload.data()['postalCode'];
      let address = data.payload.data()['address'];*/
      let photo = data.payload.data()['photo'];
      profileRes = {email: email, country: this.countrySelected, district: this.districtSelected,
         postalCode: this.info.postalCode, address: this.info.address,photo: photo};
      

      this.fireservice.setProfile(profileRes);

      result.unsubscribe();
      this.info.postalCode = '';
      this.info.address = '';
      this.countrySelected = 'Country';
      this.districtSelected= "District";
      this.clicked = false;
      console.log("message edit");
      this.router.navigate(['/tabs/tab5']);
    });

  }

  SubmitChanges() {
    this.clicked = true;

    this.confirms[0] = (this.info.postalCode != '') ? false : true; 
    this.confirms[1] = (this.info.address != '') ? false : true; 


    if(!this.confirms[0] && !this.confirms[1] && this.countrySelected != 'Country'
      && this.districtSelected != 'District') {
        this.warning = true;
    }
    
    console.log(this.info);
    console.log(this.warning);
  }

}
