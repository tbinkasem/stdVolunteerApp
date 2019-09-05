import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Grade } from '../../models/gpa';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GpaServiceProvider {

  constructor(public http: Http) { }

  getGrade():Observable<{} | Grade[]>{
    return this.http.get('http://192.168.1.28/api/get_student.php')
    .map((res: Response) => <Grade[]> res.json())
    .catch(this.handleError);
  }

  private handleError(error: any){
    return Observable.throw(error.json().error || 'ไม่สามารถติดต่อ Server ได้');
  }

}
