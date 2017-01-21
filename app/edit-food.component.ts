import {Component, Input} from '@angular/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood" class="container">
    <h3>Edit {{childSelectedFood.name}}</h3>
    <label>Enter new food name:</label>
    <input [(ngModel)]="childSelectedFood.name"><br>
    <label>Enter the caloric value:</label>
    <input [(ngModel)]="childSelectedFood.calories"><br>
    <label>Enter any details:</label>
    <input [(ngModel)]="childSelectedFood.notes"><br>
    <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;

  finishedEditing() {
    this.childSelectedFood = null;
  }
}
