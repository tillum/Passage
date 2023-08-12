import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizedBasePageComponent } from './components/area/authorized-base-page/authorized-base-page.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizedBasePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
