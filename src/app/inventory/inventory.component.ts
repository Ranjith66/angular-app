import { Component, OnInit, OnChanges } from '@angular/core';

export interface Product {
  name: string;
  id: string;
}

export interface Expense {
  name: string;
  value: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
   products :Product[]= [
    {name : "Small Onion", id : "1"},
    {name : "Big Onion", id : "2"},
    {name : "Red Chilly", id : "3"},
    {name : "Sun Flower Seeds", id : "4"},
    {name : "Rice Paddy", id : "5"}
  ]; 

  expenses :Expense[] =[{name:"", value:""}]
    
  constructor() { }

  ngOnInit() {
  }


  addexpense()
  {
    this.expenses.push({name:"", value:""});
  }

  delexpense(){
    this.expenses.pop();
  }
}
