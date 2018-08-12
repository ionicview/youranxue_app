import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Generated class for the YouImgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mdb-you-img',
  templateUrl: 'you-img.html'
})

export class YouImgComponent implements OnInit {

  text: string;


    @Input() src: string;
  
  
    constructor() {
    }
  
    ngOnInit(): void {
      if (!this.src.startsWith('http')) {
  
        this.src = environment.apiUrl.concat('/').concat(this.src);
        console.log("SRC:" + this.src);
      }
    }

}
