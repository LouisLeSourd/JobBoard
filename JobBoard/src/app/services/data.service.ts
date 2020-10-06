import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Company, OffersFilters, User} from '../models/models';
import {ErrConnection} from '../models/enum';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(protected http: HttpClient) {
    }

    getCompanies$(): Observable<Company[]> {
        return this.http.get<Company[]>('http://localhost:3000/companies');
    }

    getCompaniesWithId$(
        idCompany: number
    ): Observable<any> {
        const params: any = {
            id: idCompany
        }
        return this.http.get<any>('http://localhost:3000/companies', {params: params});
    }

    postOffersWithFilters$(
        offerFilter: OffersFilters
    ): Observable<any> {
        const body = {
            offerFilter: offerFilter
        }
        return this.http.post('http://localhost:3000/offer/filters', body);
    }

}
