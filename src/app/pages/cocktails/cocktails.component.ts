import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Cocktail } from 'src/app/models/Cocktail';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
})
export class CocktailsComponent implements OnInit {
  //
  public cocktails: Cocktail[] = [];
  //
  constructor(private cocktailService: CocktailsService,private spinner: NgxSpinnerService) {

  }

  async ngOnInit() {
    this.cocktails = await firstValueFrom( this.cocktailService.getCocktails()); 
    //
    console.log(this.cocktails);
  }


  public async makeCocktail(cocktail: Cocktail) {
    //
    try {
      //
      this.spinner.show();
      //
      let response = await firstValueFrom( this.cocktailService.makeCocktail(cocktail) );
      //
      this.spinner.hide();    
      //
    if(response != '') {
      console.log("success");
    } else {
      console.log("FAIL");
    }
    } catch(exc) {
      //
      console.log(exc);
    }
    
    
  }


  public async cleanPumps() {
    let response = await firstValueFrom( this.cocktailService.cleanPumps());
    //
    console.log(response);
  }
}
