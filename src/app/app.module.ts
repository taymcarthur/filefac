import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBarComponent } from './Components/navbar.component';
import { MenuComponent } from './Components/menu.component'
import { QuoteComponent } from './Components/quote.component'
import { HeaderComponent } from './Components/header.component'
import { TableComponent } from './Components/table.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavBarComponent, MenuComponent, HeaderComponent, QuoteComponent, TableComponent ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
