import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Article } from './models/article';
>>>>>>> added articles

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

<<<<<<< HEAD
=======
  public articles: Array<Article> = [
    {
      id: 1,
      title: 'Fun Toy Banned Because Of Three Stupid Dead Kids',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://www.thoughtco.com/thmb/MhObeXulmZNW_SK-QotWM5qlTRE=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BallisticMissile-58c1700b3df78c353c1250a2.jpg',
      // tslint:disable-next-line:max-line-length
      excerpt: "WASHINGTON, DC–Shortly before dying, Weiller told emergency medical personnel at St. Luke's Medical Center that he had shot the missile into his nose in the belief that it would travel through his body and out his belly button.",
      body: ''
    }, {
      id: 2,
      title: 'Five Or Six Dudes Jump Out Of Nowhere And Just Start Whaling On This One Guy',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--5oPt5fpA--/c_fit,f_auto,fl_progressive,q_80,w_470/fly9hv4antoxwjenvjqv.jpg',
      // tslint:disable-next-line:max-line-length
      excerpt: "BOULDER, CO–Shock and disbelief were the prevailing reactions Monday, when pizza-delivery guy Lyle Kelso, 24, reported to roommates that at around 2 or 3 a.m., he personally witnessed, like, five or six dudes suddenly jump out of freakin' nowhere and just start totally whaling on this one guy.",
      body: ''
    }, {
      id: 3,
      title: 'Fallen Firefighter Remembered As Idiot Who Sucked At His Job',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--PJaaeUAY--/c_scale,f_auto,fl_progressive,q_80,w_800/odihpqzkc9iblfzioafo.jpg',
      // tslint:disable-next-line:max-line-length
      excerpt: "LENEXA, KS—Hundreds gathered for a somber memorial service Thursday in honor of Stuart D’Abarno, 31, a firefighter killed in a residential blaze whom colleagues remember as an incompetent waste of space who couldn’t fight fire for shit.",
      body: ''
    }
  ];

>>>>>>> added articles
  ngOnInit() {
  }

}
