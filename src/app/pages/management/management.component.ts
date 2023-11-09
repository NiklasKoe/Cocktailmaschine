import { Component, OnInit } from '@angular/core';
import { catchError, firstValueFrom, tap, throwError } from 'rxjs';
import { Cocktail } from 'src/app/models/Cocktail';

import { ManagementService } from 'src/app/services/management.service';
import { ListToString } from 'src/app/pipes';
import { IngredientMap } from 'src/app/models/IngredientMap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
})
export class ManagementComponent implements OnInit {

  faTrashCan = faTrashCan;

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private managementService: ManagementService,
    private listPipe: ListToString,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  public cocktails: Cocktail[] = [];
  public ingredients: IngredientMap[] = []

  public displayAddIngredientForm: boolean = false;
  public displayAddCocktailForm: boolean = false;
  public ingredientToAdd: IngredientMap = { name: '', fillLevel: 0, pump: 0 }
  public cocktailToAdd: Cocktail = { name: '', ingredients: [] }

  async ngOnInit() {

    //
    try {

      //
      this.ingredients = await firstValueFrom(this.managementService.getIngredients());
      //
      //
      this.cocktails = await firstValueFrom(this.managementService.getCocktails());
      //

      // this.dropdownList = [
      //   { item_id: 1, item_text: 'Mumbai' },
      //   { item_id: 2, item_text: 'Bangaluru' },
      //   { item_id: 3, item_text: 'Pune' },
      //   { item_id: 4, item_text: 'Navsari' },
      //   { item_id: 5, item_text: 'New Delhi' }
      // ];
      // this.selectedItems = [
      //   { item_id: 3, item_text: 'Pune' },
      //   { item_id: 4, item_text: 'Navsari' }
      // ];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };

      //
    } catch {
      console.log("No Backend!!!")
    }
  }

  public onItemSelect(event: any) {

  }

  public onSelectAll(event: any) {

  }

  addOrRemoveIngredient(ingredient: IngredientMap) {
    //
    if (this.cocktailToAdd.ingredients.map(x => x.name).includes(ingredient.name)) {
      // Remove if included
      let indexToRemove = this.cocktailToAdd.ingredients.findIndex(x => x.name == ingredient.name);
      if (indexToRemove > -1) {
        this.cocktailToAdd.ingredients.splice(indexToRemove, 1);
      }
    } else {
      this.cocktailToAdd.ingredients.push({ name: ingredient.name, amount: 0 })
    }
  }

  cockTailContainsIngredient(ingredient: IngredientMap) {
    return this.cocktailToAdd.ingredients.findIndex(x => x.name == ingredient.name) > -1
  }

  tempName: string = '';
  changeName(val: any) {
    this.cocktailToAdd.name = this.tempName;

  }

  tempAmount: number = 0;
  changeAmount(ingredient: IngredientMap, val: any) {
    this.cocktailToAdd.ingredients.find(x => x.name == ingredient.name)!.amount = this.tempAmount;
  }


  public async addCocktail() {
    this.tempAmount = 0;
    this.tempName = '';
    let result = await firstValueFrom(this.managementService.addCocktail(this.cocktailToAdd));
    this.updateCocktails();
  }

  public async deleteCocktail(cocktail: Cocktail) {
    let result = await firstValueFrom(this.managementService.deleteCocktail(cocktail));

    this.updateCocktails();
  }


  public async addIngredient(ingredient: IngredientMap) {
    let result = await firstValueFrom(this.managementService.addIngredient(this.ingredientToAdd));
    //
    if(result == null) {
      this.toastr.error("Die Pumpe ist bereits belegt");
    } else {
      this.toastr.success("Zutat erfolgreich hinzugefügt");
    }


    /**.subscribe({
        next(num) { console.log("bla",num); },
        error(err) { console.log(err) },
        complete() {
          console.log('Finished sequence');
        }
      }
      ); */

    // result.unsubscribe();
    this.updateIngredients();
  }

  public async deleteIngredient(ingredient: IngredientMap) {
    let result = await firstValueFrom(this.managementService.deleteIngredient(ingredient));
    this.updateIngredients();
  }

  async updateCocktails() {
    this.cocktails = await firstValueFrom(this.managementService.getCocktails());
  }

  async updateIngredients() {
    this.ingredients = await firstValueFrom(this.managementService.getIngredients());
  }

}
