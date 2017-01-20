import {Component, Input} from '@angular/core';
import {Food} from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="container">
    <table class="table table-striped table-bordered">
      <tr>
        <th>Name</th>
        <th>Calories</th>
        <th>Notes</th>
      </tr>
      <tr *ngFor="let currentFood of childFoodList">
        <td (click)="editFood(clickedFood)">{{currentFood.name}}</td>
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
  selectedFood: Food = null;

  editFood(clickedFood) {
    this.selectedFood = clickedFood;


  }
}
