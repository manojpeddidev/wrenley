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




const routes: Routes = [
 {path: '', component: HomeComponent}, 
 {path: 'about', component: AboutusComponent},
 {path: 'products', component: ProductlistComponent},
 {path: 'productdetails/:id', component: ProductdetailsComponent},
 {path: 'contact', component: ContactComponent},
 {path: 'blog', component: BlogComponent},
 {path: 'careers', component: CareersComponent},
 {path: 'termsandconditions', component: TermsandconditionsComponent},
 {path: 'privacypolicy', component: PrivacypolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
