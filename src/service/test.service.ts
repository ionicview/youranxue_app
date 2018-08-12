import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { TestQuestionVO } from '../components/model/test/test.question.vo';
import { environment } from '../environments/environment';

/*
  Generated class for the TestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestService {

  constructor(private http: HttpClient) {

  }

  getAllTestQuestionsByTestId(testId: number): Observable<TestQuestionVO> {
    return this.http.get<TestQuestionVO>(`${environment.apiUrl}/test/getAllTestQuestionsByTestId/${testId}`);
  }

}
