import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Cocktail } from 'src/app/models/Cocktail';

import { ManagementService } from 'src/app/services/management.service';
import { ListToString } from 'src/app/pipes';
import { IngredientMap } from 'src/app/models/IngredientMap';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
})
export class ManagementComponent implements OnInit {

  private optionsModel: number[] = [];
  private myOptions: IMultiSelectOption[] = [];

  constructor(private managementService: ManagementService, private listPipe: ListToString) {}

  public cocktails: Cocktail[] = [];
  public ingredients: IngredientMap[] = []

  public displayAddIngredientForm: boolean = false;
  public displayAddCocktailForm: boolean = false;
  public ingredientToAdd: IngredientMap = {name: '', pump: 0, fillLevel: 0}
  public cocktailToAdd: Cocktail = {name: '', ingredients: []}

  async ngOnInit() {
    
    //
    try {
      this.cocktails = await firstValueFrom(this.managementService.getCocktails());
      //
      this.ingredients = await firstValueFrom(this.managementService.getIngredients());
      //
      this.ingredients.map((x, index) => {id: index; name: x.name})
      //
        

      //
    } catch {
      console.log("No Backend!!!")
    }
  }

  onChange() {
    console.log(this.optionsModel);
  }

  public async addCocktail(cocktail: Cocktail) {
    let result = await firstValueFrom(this.managementService.addCocktail(cocktail));
  }

  public async deleteCocktail(cocktail: Cocktail) {
    let result = await firstValueFrom(this.managementService.deleteCocktail(cocktail.name));
  }


  public async addIngredient(ingredient: IngredientMap) {
    let result = await firstValueFrom(this.managementService.addIngredient(ingredient));
  }

  public async deleteIngredient(ingredient: IngredientMap) {
    let result = await firstValueFrom(this.managementService.deleteIngredient(ingredient.name));
  }
  
}
