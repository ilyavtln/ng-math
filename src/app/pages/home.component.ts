import {Component, OnInit} from '@angular/core';
import { environment } from "../../environments/environment";
import * as content from './home.config'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  readonly content = content;

  private apiUrl = environment.apiUrl;
  private apiVal = environment.production;


  ngOnInit(): void {
    console.log(this.apiUrl, this.apiVal);
  }
}
