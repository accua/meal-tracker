import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Food} from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="container">
    <select (change)="onChange($event.target.value)">
      <option value="allFood">All Food</option>
      <option value="lessThan500">Foods less than 500 calories</option>
      <option value="moreThan500" selected="selected">Foods more than 500 calories</option>
    </select><br>
    <table class="table table-striped table-bordered">
      <tr>
        <th>Name</th>
        <th>Calories</th>
        <th>Notes</th>
      </tr>
      <tr *ngFor="let currentFood of childFoodList | calories:filterByCalories">
        <td (click)="editFood(currentFood)">{{currentFood.name}}</td>
        <td>{{currentFood.calories}}</td>
        <td>{{currentFood.notes}}</td>
      </tr>
    </table>
    <hr>
    <edit-food [childSelectedFood]="selectedFood"></edit-food>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  selectedFood : boolean = null;
  filterByCalories: string = 'moreThan500';

  editFood(currentFood) {
    this.selectedFood = currentFood;
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
