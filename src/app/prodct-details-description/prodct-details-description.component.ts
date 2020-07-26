import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodct-details-description',
  templateUrl: './prodct-details-description.component.html',
  styleUrls: ['./prodct-details-description.component.css']
})
export class ProdctDetailsDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
   readonlyc= true;
   isBlurred = true;
  
    myThumbnail:string="https://github.com/jogidharmesh/new180720-latest/blob/master/src/assets/salt.jpeg?raw=true";
    myFullresImage="https://github.com/jogidharmesh/new180720-latest/blob/master/src/assets/salt-big.jpeg?raw=true";

    items = [
    {"text":"Buy 1 QTY MRP 300"},
    {"text": "Buy 2 QTY MRP 200"},
    {"text": "Buy 3 QTY MRP 100"},
  ] 

   giamges = [
   {"src" : '../../assets/f.jpeg'},
  {"src" : '../../assets/f.jpeg'},
  {"src" : '../../assets/f.jpeg'},
  {"src" : '../../assets/f.jpeg'},]

 onclick(img)
{
  alert(img.src);
  // myThumbnail = img;
}
}
