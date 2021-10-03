import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraybutton',
  templateUrl: './arraybutton.page.html',
  styleUrls: ['./arraybutton.page.scss'],
})
export class ArraybuttonPage implements OnInit {
 
  title: string= "Check Box Task";

  public form = [
   { val: 'Pepperoni', isChecked: true },
   { val: 'Sausage', isChecked: true },
   { val: 'Mushroom', isChecked: true },
   { val: 'Hotdog', isChecked: true },
   { val: 'Corndog', isChecked: true },
 ];
  constructor() { }

  ngOnInit() {
  }

}
