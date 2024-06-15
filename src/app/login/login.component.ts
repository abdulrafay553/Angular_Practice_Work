import { Component, OnInit } from '@angular/core';
import { GmailComponent } from './gmail/gmail.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GmailComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username = 'RAFAY';
  formData: any = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    var abc = this.route.snapshot.params;
    console.log(abc);
  }

  getData(mydata: NgForm) {
    console.log(mydata);
    this.formData = mydata;
  }
}
