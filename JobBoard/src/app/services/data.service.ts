import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../models/enum';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(protected http: HttpClient) {
    }

    getCompanies$(): Observable<Company[]> {
        return this.http.get<Company[]>('http://localhost:3000/companies');
    }

    postUser$(
        name: string
    ): Observable<any> {
        let body = {
            name: name
        }
        return this.http.post('http://localhost:3000/users/add', body);
    }

}
