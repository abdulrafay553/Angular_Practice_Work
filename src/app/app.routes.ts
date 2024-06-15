import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { CounterComponent } from './counter/counter.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'blog', component: BlogComponent },
];
