import { USER_LIST } from './../../mocs/user.mocks';
import { User } from './../../models/user.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'


@Injectable()
export class GithubService {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
  }


  mockGetUserInformation(username: string): Observable<User> {
    console.log("User_List", USER_LIST)
    return Observable.of(USER_LIST.filter(user => user.name == username)[0]);
  }
}
