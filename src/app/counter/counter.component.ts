import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { count } from 'console';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  num = 0;

  addCount() {
    this.num++;
  }
  lessCount() {
    this.num--;
  }
}
