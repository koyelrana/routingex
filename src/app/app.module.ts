import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { StudentService } from "./student.service";







@NgModule({
  declarations: [
    AppComponent,
    StudentcreateComponent
   
 

    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

