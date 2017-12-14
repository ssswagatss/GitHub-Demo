import { Repository_List } from './../../mocs/repository.mockc';
import { Repository } from './../../models/repository.interface';
import { USER_LIST } from './../../mocs/user.mocks';
import { User } from './../../models/user.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { Http, Response } from '@angular/http';
import { errorHandler } from '@angular/platform-browser/src/browser';


@Injectable()
export class GithubService {

  private baseUrl: string = 'https://api.github.com/users';
  private repoUrl: string = 'repos';

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error) || 'Server Error')
  }
  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.repoUrl}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json() as Repository[])
      .do((data: Repository[]) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error) || 'Server Error')
  }
  mockGetUserInformation(username: string): Observable<User> {
    console.log("User_List", USER_LIST)
    return Observable.of(USER_LIST.filter(user => user.name == username)[0]);
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(Repository_List.filter(x => x.owner.name == username))
  }
}
