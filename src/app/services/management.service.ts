import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../models/Cocktail';
import { Ingredient } from '../models/Ingredient';
import { IngredientMap } from '../models/IngredientMap';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http: HttpClient) { 
    
  }

  public getCocktails() {
    return this.http.get<Cocktail[]>("http://10.106.110.19:8000/cocktails")
  }

  public addCocktail(cocktail: Cocktail) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.post<Cocktail>('http://10.106.110.19:8000/cocktail', cocktail, { headers })
  }

  public deleteCocktail(cocktailname: string) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.post<Cocktail>('http://10.106.110.19:8000/manage/cocktail/delete', cocktailname, { headers })
  }


  public getIngredients() {
    return this.http.get<IngredientMap[]>('http://10.106.110.19:8000/ingredients')
  }

  public addIngredient(name: IngredientMap) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.post<string>('http://10.106.110.19:8000/manage/ingredient/add', name, { headers })
  }

  public deleteIngredient(name: string) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.post<string>('http://10.106.110.19:8000/manage/ingredient/delete', name, { headers })
  }

}
