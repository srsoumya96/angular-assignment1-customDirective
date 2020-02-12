import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { MyDirectiveDirective } from '../my-directive.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, MyDirectiveDirective ],
  bootstrap:    [ AppComponent ],
  
})
export class MyModuleModule { }