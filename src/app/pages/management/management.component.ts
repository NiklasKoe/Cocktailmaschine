import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Cocktail } from 'src/app/models/Cocktail';

import { ManagementService } from 'src/app/services/management.service';
import { ListToString } from 'src/app/pipes';
import { IngredientMap } from 'src/app/models/IngredientMap';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
})
export class ManagementComponent implements OnInit {

  constructor(private managementService: ManagementService, private listPipe: ListToString) {}

  public cocktails: Cocktail[] = [];
  public ingredients: IngredientMap[] = []

  async ngOnInit() {
    //
    try {
      this.cocktails = await firstValueFrom(this.managementService.getCocktails());
      //
      this.ingredients = await firstValueFrom(this.managementService.getIngredients());

    } catch {
      console.log("No Backend!!!")
    }
  }

  public async addCocktail(cocktail: Cocktail) {
    let result = await firstValueFrom(this.managementService.addCocktail(cocktail));
  }

  public async deleteCocktail(cocktail: Cocktail) {
    let result = await firstValueFrom(this.managementService.deleteCocktail(cocktail.name));
  }

  public async addIngredient(ingredient: string) {
    let result = await firstValueFrom(this.managementService.addIngredient(ingredient));
  }

  public async deleteIngredient(ingredient: IngredientMap) {
    let result = await firstValueFrom(this.managementService.deleteIngredient(ingredient.name));
  }
  
}
