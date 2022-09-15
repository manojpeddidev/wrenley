import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { CareersComponent } from './pages/careers/careers.component';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ShopcartComponent } from './pages/shopcart/shopcart.component';
import { ProductsResolver } from './services/product-resolver';




const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'about', component: AboutusComponent},
 {path: 'products', component: ProductlistComponent}, //, resolve: { productsData: ProductsResolver }
 {path: 'productdetails/:id', component: ProductdetailsComponent},
 {path: 'contact', component: ContactComponent},
 {path: 'blog', component: BlogComponent},
 {path: 'careers', component: CareersComponent},
 {path: 'termsandconditions', component: TermsandconditionsComponent},
 {path: 'privacypolicy', component: PrivacypolicyComponent},
 {path: 'shopcart', component: ShopcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
