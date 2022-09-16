import { Component, OnInit, TemplateRef  } from '@angular/core';
import { CartService } from 'src/app/services/cart-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCompleteItemFromCart(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  updateGrandTotal(){
    this.grandTotal = this.cartService.getTotalPrice();

  }

}
