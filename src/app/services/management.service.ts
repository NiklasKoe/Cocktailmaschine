import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../models/Cocktail';
import { Ingredient } from '../models/Ingredient';
import { IngredientMap } from '../models/IngredientMap';
import * as globals from '../globals'

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http: HttpClient) { 
    
  }

  public getCocktails() {
    return this.http.get<Cocktail[]>(globals.apiUrl + "/cocktails")
  }

  public addCocktail(cocktail: Cocktail) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.post<Cocktail>(globals.apiUrl + '/cocktail', cocktail, { headers })
  }

  public deleteCocktail(cocktail: Cocktail) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.delete<Cocktail>(globals.apiUrl + `/cocktail?name=${cocktail.name}`)
  }


  public getIngredients() {
    return this.http.get<IngredientMap[]>(globals.apiUrl + '/ingredients')
  }

  public addIngredient(name: IngredientMap) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.post<string>(globals.apiUrl + '/ingredient', name, { headers })
  }

  public deleteIngredient(ingredient: IngredientMap) {
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.delete<string>(globals.apiUrl + `/ingredient?name=${ingredient.name}`,)
  }

}
