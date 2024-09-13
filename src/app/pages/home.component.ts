import {Component, OnInit} from '@angular/core';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  private apiVal = environment.production;

  ngOnInit(): void {
    console.log('Hello World!', this.apiUrl, this.apiVal);
  }
}
