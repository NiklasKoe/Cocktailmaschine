import { Pipe, PipeTransform } from "@angular/core";
import { Ingredient } from "./models/Ingredient";


@Pipe({name: 'listToSeperatedString'})
export class ListToString implements PipeTransform {
    transform(list: Ingredient[], ...args: any[]) {
        let bla = '';
        console.log(list);
        //
        list.forEach(x => {
            bla += `${x.amount}ml ${x.name}`
            console.log(bla);
        })
        return bla;
    }

}