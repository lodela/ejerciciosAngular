import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/useres.model';

@Injectable({
    providedIn:'root'
})
export class UsersService{
    private url:string = 'https://jsonplaceholder.typicode.com';
    
    constructor(
        private http:HttpClient
    ){}
    
    getUsers(){
        return this.http.get<any>(`${this.url}/users`)
                    .toPromise()
                    .then(res => <Users[]> res)
                    .then(res => {return res})
                    .catch(this.ocurrioUnError);
    }
    
    getPersonalData(id:number){
        console.log(id);
        return this.http.get<any>(`${this.url}/users/${id}`)
                    .toPromise()
                    .then(res => <Users[]> res)
                    .then(res => {return res})
                    .catch(this.ocurrioUnError);
    }
    
    ocurrioUnError(error:any){
        console.log('ocurrio un error en el servicio', error);
        return Promise.reject(error.message || error);
    }
}