import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards = [
    {
      title: 'Small Onion',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://i.ibb.co/FbvJTFq/small-onion-red-min.jpg'
    },
    {
      title: 'Big Onion',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://i.ibb.co/60LYpr3/B-Onions-grande-700x700.jpg'
    },
    {
      title: 'Red Chilli',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:'https://i.ibb.co/DCD9DSf/dry-red-chilli-1561991449-4979605.jpg'
    },
    {
      title: 'Sun Flower Seeds',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://i.ibb.co/rFfXG6j/il-794x-N-457330757-66aq.jpg'
    },
    {
      title: 'Rice Paddy',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://i.ibb.co/Qk5sDzq/pusa-1637-srajan-agro-rice-basmati-seed-500x500.jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

}
