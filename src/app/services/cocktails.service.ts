import { Injectable } from '@angular/core';
import { Cocktail } from '../models/Cocktail';
import { HttpClient } from '@angular/common/http';
import * as globals from '../globals'

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  

  constructor(private http: HttpClient) { }

  public getCocktails() {
    return this.http.get<Cocktail[]>(globals.apiUrl + "/cocktails");
  }

  public makeCocktail(cocktail: Cocktail) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    console.log(cocktail.name);
    return this.http.post<string>(globals.apiUrl + "/start", cocktail, { headers } )
  }

  public cleanPumps() {
    return this.http.post<boolean>(globals.apiUrl + "/configuration/clean_pumps", true)
  }


}
