import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlockFirstComponent } from './block-first/block-first.component';
import { BlockSecondComponent } from './block-second/block-second.component';
import { BlockThirdComponent } from './block-third/block-third.component';
import { BlockFourComponent } from './block-four/block-four.component';
import { BlockFiveComponent } from './block-five/block-five.component';
import { BlockSixComponent } from './block-six/block-six.component';
import { LogoWallComponent } from './components/logo-wall/logo-wall.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DefaultHeaderComponent } from './layouts/default-layout/default-header/default-header.component';
import { DefaultFooterComponent } from './layouts/default-layout/default-footer/default-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockFirstComponent,
    BlockSecondComponent,
    BlockThirdComponent,
    BlockFourComponent,
    BlockFiveComponent,
    BlockSixComponent,
    LogoWallComponent,
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
