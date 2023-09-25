import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlockFirstComponent } from './block-first/block-first.component';
import { BlockSecondComponent } from './block-second/block-second.component';
import { BlockThirdComponent } from './block-third/block-third.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockFirstComponent,
    BlockSecondComponent,
    BlockThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
