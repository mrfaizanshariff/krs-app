import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviews:any = [
    
    {
      id: 1,
      name: "Swayam Pragnya",
      reviewLink:
        "https://g.co/kgs/uH74ia",
      text:
        "This place is best for people who love camping. It's a gated camping site. Very calm, peaceful and far from the city noise.The caretakers of this place are very hospitable and nice. They provide food and tents but you can bring your own tent, you can cook your own food too. Fishing and boating available at extra cost.     The best part which I like about this place is that you can park you car beside your tent and chill with your friends. "
    },
    {
      id: 2,
      name: "Rakshith Moto",
      reviewLink:
        "https://g.co/kgs/bfwmyu",
      text:
        "Stayed for one night and it gave me lifetime memories. Place is so good with food, restroom and camping. I have never even imagined of getting milkyway pics. Pls take a look at photos attached. The owner was very kind and didn't even charged for food even though i told i don't need food."
    },
    {
      id: 3,
      name: "Vaishnavi Reddy",
      reviewLink:
        "https://g.co/kgs/Qy6EgK",
      text:
        "By far the best riverside tent stay. They provide beds for the tent making it very comfortable. The view is stunning. You will get to experience river Kaveri like never before."
    },
    {
      id: 4,
      name: "Vinay Kamath",
      reviewLink:
        "https://g.co/kgs/i2iWCc",
      text:
        "Nice place to visit for some time out in the lap of nature. Ask the proprietor for a barbecue. Facility to cook your own food available. Professional fishing rods available on rent. Spend a night in a tent ⛺ to top off an activity filled day ☺"
    }
  ];
  currentItem = 0;
  author:string=''
  info:string=''
  reviewLink=''
  constructor() { }

  ngOnInit(): void {
    this.showPerson(0)
  }

  nextBtn()  {
    this.currentItem++;
    if (this.currentItem > this.reviews.length - 1) {
      this.currentItem = 0;
    }
    this.showPerson(this.currentItem);
  }
  showPerson(currentItem:any){

    const item=this.reviews[currentItem]
    this.author=item.name
    this.info=item.text
    this.reviewLink=item.reviewLink
  }
  // show prev person
  prevBtn(){
    this.currentItem--;
    if (this.currentItem < 0) {
      this.currentItem = this.reviews.length - 1;
    }
    this.showPerson(this.currentItem);
  }
}
