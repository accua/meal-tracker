import {Component} from '@angular/core';
import {Food} from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div>
    <food-list [childFoodList]="masterFoodList"></food-list>
    <new-food (newFoodSender)="addFood($event)"></new-food>
    </div>
  </div>
  `
})

export class AppComponent {
  masterFoodList: Food[] = [
    new Food('Chicken Shawarma', 720, 'Biggest meal for $7 on fifth'),
    new Food('Yogurt', 350, 'Breakfast each morning'),
    new Food('#14 at the Thai place on fifth', 825, 'Lots of vegetables')
  ]

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild)
  }

}
