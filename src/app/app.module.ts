import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from "@angular/common/http";
import { MathjaxModule } from "mathjax-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathjaxModule.forRoot(),
  ],
  providers: [provideHttpClient()],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
