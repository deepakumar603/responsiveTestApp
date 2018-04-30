import {Injectable} from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    
    private getUrl = 'https://api.github.com/search/repositories?q=';
    private userListUrl = 'https://api.github.com/users'
 
    constructor(private http: Http) {}
 
    getUserData (): Observable<any> {
        return this.http.get(this.userListUrl)
            .map(this.parseData)
            .catch(this.handleError);
    }

    getSearchUser (key:string): Observable<any> {
        return this.http.get(this.getUrl+key)
            .map(this.parseData)
            .catch(this.handleError);
    }
 
    private parseData(res: Response)  {
        return res.json() || [];
    }
 
    private handleError(error: Response | any) {
        let errorMessage: string;
 
        errorMessage = error.message ? error.message : error.toString();
        return Observable.throw(errorMessage);
    }
}