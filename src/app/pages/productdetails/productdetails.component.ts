import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: ProductdetailsService, private cartService: CartService) { }
  getProductId= 0;
  productDetails: any;
  ngOnInit(): void {
    // this.getProductId = this.param.snapshot.paramMap.get('id');
    // console.log(this.getProductId);
    // if(this.getProductId){
    //   this.productData = this.service.productdetails.filter((value)=>{
    //     return value.id = this.getProductId;
    //   });
    //   console.log(this.productData);
    // }
    this.param.params.subscribe(data => {
      this.getProductId = data['id'];
    });

    this.service.viewProduct(this.getProductId).subscribe(productData1 => {
      this.productDetails = productData1;

      this.cartService.getProducts().subscribe((res: any) => {
        if(res && res.length){
          let product = res.find((each: any) => each.id === this.productDetails.id);
          this.productDetails.quantity = product?.quantity || 0
        }
      })
    });
  }

  addtocart(item: any){
    item.quantity++;
    this.cartService.addtoCart(item);
    // this.updateProductCount();
  }

  removeItem(item: any){
    item.quantity--;
    this.cartService.removeCartItem(item);
    // this.updateProductCount();
  }

}
