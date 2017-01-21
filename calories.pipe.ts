import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';


@Pipe({

})


export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], args) {
    var output: Food[] = [];
  }
}
