import { Component } from '@angular/core';
import { carouselImages } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'krs-app';
  logo="assets/IMG-20220425-WA0013.png.jpg";
  images:carouselImages[]=[{
    imageSRC:'https://drive.google.com/uc?export=view&id=1gJIh6k3OA1FHYtxw2XrmjeRbmJYCBFyv&auto=format',
    imageALT:'Aerial View'
  },
  {
    imageSRC:'https://drive.google.com/uc?export=view&id=1uOR67xUhPjV5wqHE2Hse6vGlyJAIu8mI',
    imageALT:'PORSCHE'
  },
  {
    imageSRC:'https://drive.google.com/uc?iexport=view&id=1vY8Wixe-R8FM-7oo1Lal6rTZZuIVngTR',
    imageALT:'PORSCHE'
  },
  {
    imageSRC:'https://drive.google.com/uc?export=view&id=1ipyqTXypq-gq_MzycDHcGCTt9MmfGfV0',
    imageALT:'TEST Image'
  },
  {
    imageSRC:'https://drive.google.com/uc?export=view&id=1WEXcgSFcxrtphxZ_EMiNb3XJoKJRVBSI',
    imageALT:'thunder'
  },
  {
    imageSRC:'https://drive.google.com/uc?export=view&id=1y0d_jgdqefbcCN5WHwNmUJVYox2cgnqB',
    imageALT:'thunder'
  },

  ]
}
