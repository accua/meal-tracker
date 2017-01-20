import {Component, Input} from '@angular/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div class="container">
    <form *ngIf="childSelectedFood">
      <h3>Edit {{childSelectedFood.name}}</h3>
    </form>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;

  finishedEditing() {
    this.childSelectedFood = null;
  }
}
