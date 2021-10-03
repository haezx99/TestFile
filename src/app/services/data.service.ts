import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() {
    this.items = [
      {title: "  Kelantan",image:"assets/Kelantan.png", link: "kelantan"},
      {title: "  Terengganu",image:"assets/Terengganu.png", link: "terengganu"},
      {title: "  Perak",image:"assets/Perak.png", link: "perak"},
      {title: "  Selangor",image:"assets/Selangor.png", link: "selangor"},
      {title: "  Kuala Lumpur",image:"assets/KL.png", link: "kl"},
    ];
   }

   filterItems(searchTerm) {
     return this.items.filter(item => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}
