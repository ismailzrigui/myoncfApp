import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BilletinfosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BilletinfosProvider Provider');
  }

  getbilletinfos(billet) {
    // Fonction pour décoder le code billet    

    let b0 = {code:"",depart: "Rabat Ville",arrivee: "Sale",date: "29/06/2018",prix: "41",time: "13:30"};    
    let b1 = {code:"0700103070014454400",depart: "Casa Voyageurs",arrivee: "Sale",date: "29/06/2018",prix: "41",time: "13:30"};
    let b2 = {code:"0820104930014367069",depart: "Meknes",arrivee: "Sidi Slimane Medina",date: "28/06/2018",prix: "31",time: "13:10"};
    let b3 = {code:"0690103230014477309",depart: "Casa Port",arrivee: "Sale",date: "29/06/2018",prix: "29",time: "17:15"};
    let b4 = {code:"0670101930013691836",depart: "Bouskoura",arrivee: "Settat",date: "20/06/2018",prix: "32",time: "18:33"};
    let b5 = {code:"0690103260014494767",depart: "Casa Port",arrivee: "Settat",date: "29/06/2018",prix: "32",time: "19:50"};
    let b6 = {code:"0970102730013519427",depart: "Settat",arrivee: "Casa Voyageurs",date: "18/06/2018",prix: "32",time: "19:53"};
    
        
    switch (billet.text) {
      case b1.code:
        return b1;
      case b2.code:
        return b2;
      case b3.code:
        return b3;
      case b4.code:
        return b4;
      case b5.code:
        return b5;
      case b6.code:
        return b6;
      default:
        return b0;
    }
  }

  getbilletpts(billet) {
    //Fonction pour les pts de chaque billet

    let b0 = {code:"",depart: "Rabat Ville",arrivee: "Sale",date: "29/06/2018",prix: "41",time: "13:30"};    
    let b1 = {code:"0700103070014454400",depart: "Casa Voyageurs",arrivee: "Sale",date: "29/06/2018",prix: "41",time: "13:30"};
    let b2 = {code:"0820104930014367069",depart: "Meknes",arrivee: "Sidi Slimane Medina",date: "28/06/2018",prix: "31",time: "13:10"};
    let b3 = {code:"0690103230014477309",depart: "Casa Port",arrivee: "Sale",date: "29/06/2018",prix: "29",time: "17:15"};
    let b4 = {code:"0670101930013691836",depart: "Bouskoura",arrivee: "Settat",date: "20/06/2018",prix: "32",time: "18:33"};
    let b5 = {code:"0690103260014494767",depart: "Casa Port",arrivee: "Settat",date: "29/06/2018",prix: "32",time: "19:50"};
    let b6 = {code:"0970102730013519427",depart: "Settat",arrivee: "Casa Voyageurs",date: "18/06/2018",prix: "32",time: "19:53"};
    
        
    switch (billet.text) {
      case b1.code:
        return b1.prix;
      case b2.code:
        return b2.prix;
      case b3.code:
        return b3.prix;
      case b4.code:
        return b4.prix;
      case b5.code:
        return b5.prix;
      case b6.code:
        return b6.prix;
      default:
        return 0//b0.prix;
    }
    
  }
}
