import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { HttpClientModule } from '@angular/common/http';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ShopcartComponent } from './pages/shopcart/shopcart.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
// import { ProductsResolver } from './services/product-resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ProductlistComponent,
    BlogComponent,
    ProductdetailsComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent,
    CareersComponent,
    ShopcartComponent,

  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
