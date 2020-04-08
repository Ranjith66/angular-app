import { Component, OnInit } from '@angular/core';

export interface Inventory {
  sellerName: string;
  productType: string;
  listedDate: string;
  nickname: string;
}

export interface Product {
  name: string;
  id: string;
}

export interface Expense {
  name: string;
  value: string;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  inventoryClicked:boolean = false;
  inventories: Inventory[] = [
    {sellerName: 'Ramesh', productType: 'Small Onion', listedDate: '2019-11-08', nickname: 'lot1'},
    {sellerName: 'Mukesh', productType: 'Big Onion', listedDate: '2019-11-09', nickname: 'lot2'},
  ];

  expenses :Expense[] =[{name:"", value:""}]

  trantype :string[] = ["Seller Bill", "Buyer Bill"]

  priceunit :string[] = ["Per Bag", "Per Kg"]
  
  products :Product[]= [
    {name : "Small Onion", id : "1"},
    {name : "Big Onion", id : "2"},
    {name : "Red Chilly", id : "3"},
    {name : "Sun Flower Seeds", id : "4"},
    {name : "Rice Paddy", id : "5"}
  ]; 

  constructor() { }

  ngOnInit() {
  }

  onClick(data: Inventory){
    this.inventoryClicked = true;
  }

  addexpense()
  {
    this.expenses.push({name:"", value:""});
  }

  delexpense(){
    this.expenses.pop();
  }
}
