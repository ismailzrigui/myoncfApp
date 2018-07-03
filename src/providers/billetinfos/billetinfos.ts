import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BilletinfosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BilletinfosProvider Provider');
  }

  getbilletinfos(code) {
    // Fonction pour décoder le code billet

    let b0 = {code:"",depart: "Rabat Ville",arrivee: "Sale",date: "29/06/2018",prix: "41",time: "13:30"};    
    let b1 = {code:"0700103070014454400",depart: "Casa Voyageurs",arrivee: "Sale",date: "29/06/2018",prix: "41",time: "13:30"};
    let b2 = {code:"0820104930014367069",depart: "Meknes",arrivee: "Sidi Slimane Medina",date: "28/06/2018",prix: "31",time: "13:10"};
    let b3 = {code:"0690103230014477309",depart: "Casa Port",arrivee: "Sale",date: "29/06/2018",prix: "29",time: "17:15"};
    
    switch (code) {
      case b1.code:
        return b1;
      case b2.code:
        return b2;
      case b3.code:
        return b3;
      default:
        return b0;
    }
  }

  getbilletpts(code) {
    //Fonction pour les pts de chaque billet
    
    return 37;
  }
}
