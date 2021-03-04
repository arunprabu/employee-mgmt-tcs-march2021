import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ColorizerDirective } from './products/directives/colorizer.directive';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ColorizerDirective,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // two way binding will work
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule should be bootstrapped with AppComp
})
export class AppModule { }
