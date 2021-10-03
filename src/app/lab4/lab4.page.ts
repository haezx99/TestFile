import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class Lab4Page implements OnInit {

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
