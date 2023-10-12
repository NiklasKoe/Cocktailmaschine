import { Injectable } from '@angular/core';
import { Cocktail } from '../models/Cocktail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  

  constructor(private http: HttpClient) { }

  public getCocktails() {
    return this.http.get<Cocktail[]>("http://10.106.106.228:8000/cocktails");
  }

  public makeCocktail(cocktail: Cocktail) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    console.log(cocktail.name);
    return this.http.post<string>("http://10.106.106.228:8000/start", cocktail, { headers } )
  }

  public cleanPumps() {
    return this.http.post<boolean>("http://10.106.106.228:8000/configuration/clean_pumps", true)
  }
}
