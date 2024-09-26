import {Component, OnInit} from '@angular/core';
import { environment } from "../../environments/environment";
import {TestService} from "../services/test/test.service";
import {inject} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUserData} from "../services/models/user-data.interface";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  private apiVal = environment.production;

  registerForm: FormGroup;
  authForm: FormGroup;

  authPassword = 'b6bd1838155b7c0ae729';

  testService = inject(TestService);

  data: any;
  data2: any;

  constructor(
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastname: ['', Validators.required],
      name: ['', Validators.required]
    });

    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.testService.getNetwork()
      .subscribe((val: any) => {
        this.data = val;
      })

    this.testService.getUser()
      .subscribe((val: any) => {
        this.data2 = val;
      })
  }

  ngOnInit(): void {
    console.log('Hello World!', this.apiUrl, this.apiVal);
    console.log(this.data)
    console.log(this.data2)
  }

  async onSubmitAuth() {
    if (this.authForm.valid) {
      const userData = this.registerForm.value;
      console.log('User Data:', userData);

      try {
        const response = await firstValueFrom(this.testService.authUser(userData));
        console.log('Registration Response:', response);
      } catch (error) {
        console.error('Registration Error:', error);
      }
    } else {
      console.log('Form is not valid!');
    }
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const userData: IUserData = this.registerForm.value;
      console.log('User Data:', userData);

      try {
        // Используем firstValueFrom для преобразования Observable в Promise
        const response = await firstValueFrom(this.testService.registerUser(userData));
        console.log('Registration Response:', response);
      } catch (error) {
        console.error('Registration Error:', error);
      }
    } else {
      console.log('Form is not valid!');
    }
  }
}
