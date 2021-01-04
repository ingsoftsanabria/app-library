import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';

import { CommonInputModule } from 'common-input';
import { CommonButtonModule } from 'common-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonInputModule,
    CommonButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
