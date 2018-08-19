import { CollectionUtils } from './../../utils/CollectionUtils';
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
  @Input() imgList: Array<string>;

  imgSrcList: Array<string>;

  constructor() {
  }

  ngOnInit(): void {
    this.src = this.convertToURI(this.src);

    this.imgSrcList = [];
    if (this.src) {
      this.imgSrcList.push(this.src);
    }

    if (!CollectionUtils.isEmpty(this.imgList)) {
      this.imgList.forEach(img => {
        this.imgSrcList.push(img);
      });
    }





  }

  convertToURI(imgPath: string): string {


    if (!imgPath.startsWith('http')) {
      return environment.apiUrl.concat('/').concat(imgPath);
    }

    return imgPath;
  }

}
