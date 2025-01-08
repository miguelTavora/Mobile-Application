export class CountryInfo {
    public countrys: string[] = ["Portugal", "Spain", "France", "Germany"];
    public districts = new Map<string, string[]>();

    constructor() {
        this.districts.set(this.countrys[0], ["Lisboa", "Porto", "Coimbra"]);
        this.districts.set(this.countrys[1], ["Madrid", "Barcelona", "Sevilla"]);
        this.districts.set(this.countrys[2], ["Normandy", "Brittany", "Occitanie"]);
        this.districts.set(this.countrys[3], ["Bavaria", "Saxony", "Brandenburg"]);
    }
    
}


