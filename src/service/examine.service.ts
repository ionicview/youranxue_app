import {Injectable,Inject} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Observable';
import {SERVER_URL} from "../config";

@Injectable()
export class ExamineService{
  http:any;
  bookUrl:String;
  allBooks:any;
  books1:any;
  data:any;
  img1:string;
  imgbookUrl:String;
  constructor(http:Http){
  
  }

   getAllBooks(){
    var response = this.http.get(`${SERVER_URL}/books/myBooks`).subscribe(
      data=> this.allBooks = data,
      err=>console.log(err),
      ()=> console.log('Request Complete')
    );
    return  this.allBooks ;
  }

}
