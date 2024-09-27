import { Component } from '@angular/core';
import {NAVIGATION_CONFIG} from "./config/matin-navigation.config";

@Component({
  selector: 'math-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  readonly config = NAVIGATION_CONFIG
}
