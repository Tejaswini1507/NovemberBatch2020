import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { DemoComponent } from './demo/demo.component';
import { Day2Component } from './day2/day2.component';
import { HelloComponent } from './hello.component';
import { Day3Component } from './day3/day3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DemoComponent,
    Day2Component,
    HelloComponent,
    Day3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
