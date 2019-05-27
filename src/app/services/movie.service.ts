import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map        } from 'rxjs/operator';

//Typescript custom enum for search types (optional)
export enum SearchType{
  all      = '',
  movie    = 'movie',
  series   = 'series',
  episodes = 'episodes'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url:string = 'https://www.omdbapi.com';
  apiKey:any = 'a3bbc72e';
  
  /**
   * Constructor of the service with dependency injection
   * @param http The standard angular httpClient, toi make the request
  */
  constructor( private http:HttpClient ) { }
  
  /**
   * Get data from the omd API
   * map the result to return only the result that we need
   * 
   * @param {string} title Search Term
   * @param {string} type movie, series, episodes or empty
   * @return Observable with the search result
  */
  searchData( title:string, type:SearchType ):Observable<any>{
    let url = `${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`;
    console.log(url);
    
    return this.http.get(url)
                    .pipe( map (result => result['Search']));
  }
  
}
