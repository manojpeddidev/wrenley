import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  keyword = 'productName';
  public products : any = [];
  productsIncart: any = [];
  cartCount: number = 0;
  allProducts: any = [];
  constructor(private cartService: CartService, private productSer: ProductdetailsService, private router : Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.productsIncart = res;
    })
    this.cartService.cartItemsCount.subscribe((res: any) => {
      this.cartCount = res;
    });
    this.getAllProducts();
  }

  getAllProducts() {
    this.productSer.getAllProducts().subscribe((data: any) => {
      this.products = data;
      this.allProducts = data;
    })
  }

  onSearch(e: any){
    this.router.navigate([`productdetails/${e.id}`])

  }

  onChangeSearch(search: any) {

  }

  onFocused(e: any) {
    // do something
  }
}
