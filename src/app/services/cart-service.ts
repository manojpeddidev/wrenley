import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  public cartItemList : any[] =[];
  public cartItemsCount  = new BehaviorSubject<any>(0);
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() {
    let localCartData: any = localStorage.getItem("cartData");
    let cartData = JSON.parse(localCartData);
    if(cartData && cartData?.length) {
      this.cartItemList = cartData;
      this.productList.next(this.cartItemList);
    }

    let localCartCount: any = localStorage.getItem("cartCount");
    let cartCount = JSON.parse(localCartCount);

    if(cartCount) {
      this.cartItemsCount.next(cartCount)
    }

  }
  getProducts(){
    return this.productList.asObservable();
  }

  // setProduct(product : any){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  addtoCart(product : any){
    const itemIndex = this.cartItemList.findIndex(each => each.id === product.id)
    if(itemIndex > -1){
      this.cartItemList[itemIndex] = product;
    } else {
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
    this.getCartCount();
    this.getTotalPrice();
    this.updateStore();
  }

  getCartCount(){
    let cartCount = 0;
    this.cartItemList.forEach((each: any) => {
      cartCount += each.quantity;
    });
    this.cartItemsCount.next(cartCount)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((each:any)=>{
      grandTotal += each.offerPrice * each.quantity;
    })
    return grandTotal;
  }
  removeCompleteItemFromCart(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    this.getCartCount();
    this.getTotalPrice();
    this.updateStore();
  }
  removeCartItem(product: any){
    const itemIndex = this.cartItemList.findIndex(each => each.id === product.id)
    if(itemIndex > -1){
      this.cartItemList[itemIndex] = product;
    }
    // this.cartItemList.map((a:any, index:any)=>{
    //   if(product.id=== a.id){
    //     this.cartItemList.splice(index,1);
    //   }
    // })
    this.productList.next(this.cartItemList);
    this.getCartCount();
    this.getTotalPrice();
    this.updateStore();
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.updateStore();
  }

  updateStore(){
    localStorage.setItem("cartData", JSON.stringify(this.cartItemList));
    let cartCount = 0;
    this.cartItemsCount.subscribe(count => cartCount=count);
    localStorage.setItem("cartCount", JSON.stringify(cartCount))
  }

  ngOnDestroy(): void {
      this.updateStore();
  }
}
