import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {}
