import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  flag: boolean = true;
  username = 'rafay';
  color = 'red';
  city = ['Lahore', 'Karachi', 'Islamabad', 'Multan'];
  cityjson = [
    { name: 'Lahore', code: '42' },
    { name: 'Karachi', code: '21' },
    { name: 'Islamabad', code: '51' },
    { name: 'Multan', code: '40' },
  ];
}
