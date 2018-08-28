import { CollectionUtils } from './../../utils/CollectionUtils';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * 图片显示模块.
 * 可传入单个图片或者图片列表
 * 两个都传的情况下，先显示单个图片，再显示图片列表
 * 
 * @input
 *    src:单个图片
 *    imgList:图片列表
 * @output
 *    无
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

    this.imgSrcList = [];
    if (this.src) {
      this.imgSrcList.push(this.convertToURI(this.src));
    }

    if (!CollectionUtils.isEmpty(this.imgList)) {
      this.imgList.forEach(img => {
        this.imgSrcList.push(this.convertToURI(img));
      });
    }
  }

  convertToURI(imgPath: string): string {

   // console.log("Before Covert Image Path:"+imgPath);
    if (!imgPath.startsWith('http')) {
      var afterPath: string;
      afterPath = environment.apiUrl.concat('/').concat(imgPath);
      //console.log("After Covert Image Path:"+afterPath);

      return afterPath;
    }

    return imgPath;
  }

}
