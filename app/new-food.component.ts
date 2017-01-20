import {Component, Output, EventEmitter} from '@angular/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h3>New Food</h3>
  <div class="container">
    <div class="form-group">
      <label>Food:</label>
      <input #newFood>
    </div>
    <div class="form-group">
      <label>Calories:</label>
      <input #newCalories>
    </div>
    <div class="form-group">
      <label>Notes:</label>
      <input #newNote>
    </div>
    <button class="btn" (click)="submitForm(newFood.value, newCalories.value, newNote.value); newFood.value=''; newCalories.value=''; newNote.value='';">Save</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, calories: number, notes: string) {
    var NewFoodToAdd: Food = new Food(name, calories, notes)
    this.newFoodSender.emit(NewFoodToAdd)
  }
}
