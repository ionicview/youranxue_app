import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { TestQuestionVO } from '../components/model/test/test.question.vo';
import { environment } from '../environments/environment';
import { RadarDataVO } from '../components/model/analysis/radar-data.vo';

/*
  Generated class for the TestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnalysisTestService {

  constructor(private http: HttpClient) {
  }

  getTableDataMap(): Observable<RadarDataVO> {
    return this.http.get<RadarDataVO>(`${environment.apiUrl}/ability-analysis/table-map/`);
  }
  getTableDataVO(): Observable<RadarDataVO> {
    return this.http.get<RadarDataVO>(`${environment.apiUrl}/ability-analysis/table-vo/`);
  }
  getTableDataJson(): Observable<RadarDataVO> {
    return this.http.get<RadarDataVO>(`${environment.apiUrl}/ability-analysis/table-json/`);
  }
  getRadarOption(): Observable<any> {
      return this.http.get<RadarDataVO>(`${environment.apiUrl}/ability-analysis/radar-option/`);
  }

}
