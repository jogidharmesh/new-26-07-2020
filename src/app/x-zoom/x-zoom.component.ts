import { Component, OnInit } from '@angular/core';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
declare var $: any;
declare var jQuery:any;


@Component({
  selector: 'app-x-zoom',
  templateUrl: './x-zoom.component.html',
  styleUrls: ['./x-zoom.component.css']
})
export class XZoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  wishclick(){

    this.wishlist = 'fas fa-heart red'
  }

  itemadd(){
    this.itemadded = 'button-add';
  }

  images = [
    {
      text: "Good life Almonds Good life Almonds ",
      image: "/assets/a.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/b.jpg",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/c.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/d.jpeg?raw=true",
      name: "Kalyan Fashion",
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/e.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/a.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/b.jpg",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/c.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/d.jpeg?raw=true",
      name: "Kalyan Fashion",
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/e.jpeg?raw=true",
      name: "Kalyan Fashion"
    }
  ]
  
}
