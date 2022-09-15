import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { CartService } from 'src/app/services/cart-service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit, AfterViewInit {

  constructor(private service: ProductdetailsService, private cartService: CartService, private route: ActivatedRoute) {
    // this.getAllProducts();

  }

  productData: any;
  rawProductsData: any;
  categories: any[] = [];
  selectedCategory: any = "all" ;
  ngOnInit() {
    // let resolverData:any = this.route.snapshot.data;
    // this.productData = resolverData.productsData || []
    // this.rawProductsData = this.productData;
    this.getAllProducts();
    this.getAllCategories();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.route.queryParams
    .subscribe((params: any) => {
      if(params?.category){
        this.filterProductsByCategory(params?.category)
      }
    }
    );
    this.updateProductCount();
    }, 500);
  }
  getAllProducts() {
    this.service.getAllProducts().subscribe((data: any) => {
      this.productData = data;
      this.rawProductsData = data;
    })
  }

  getAllCategories(){
    this.service.getAllCategories().subscribe((response: any) => {
      this.categories = response;
      console.log(response);
    });
  }

  filterProductsByCategory(category: any){
    const categoryObj = this.categories.find((each: any) => each.categoryName === category);
    this.selectedCategory = categoryObj?.id
    this.onCategoryChange();
  }

  addtocart(item: any){
    item.quantity++;
    this.cartService.addtoCart(item);
    this.updateProductCount();
  }

  removeItem(item: any){
    item.quantity--;
    this.cartService.removeCartItem(item);
    this.updateProductCount();
  }

  updateProductCount(){
    this.cartService.getProducts().subscribe((cartItems: any)=>{
      cartItems.forEach((each: any, index: any) => {
        this.productData.forEach((eachProdcut: any) => {
          if(eachProdcut.id === each.id){
            eachProdcut.quantity = cartItems[index].quantity;
          }
        })
      })
    });
    console.log(this.productData)
  }

  onCategoryChange(){
    if(this.selectedCategory == "all"){
      this.getAllProducts();
    } else {
      this.productData = this.rawProductsData.filter((each: any) => {
        return each.categoryId.toString() == this.selectedCategory
      })
    }
    // this.updateProductCount();
  }
}
