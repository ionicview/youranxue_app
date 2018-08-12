import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from "../config";
import { ExamineGroupVO } from '../components/model/examine/examine.group.vo';



@Injectable()
export class ExamineService {
  //http:any;
  bookUrl: String;
  allExamines: Array<ExamineGroupVO>;

  constructor(private httpClient: HttpClient) {

  }

  public getExamines(): Observable<ExamineGroupVO[]> {

    return this.httpClient.get<ExamineGroupVO[]>(`${SERVER_URL}/examine/getAllExamines`);

  }

}
