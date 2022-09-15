import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  productdetails: any;
  constructor(private httpClient: HttpClient) { }
  // productdetails = [
  //   {
  //     id: 1,
  //     tabName: 'VITAMIN E',
  //     pCapacity: '500mg',
  //     nofTablets: '60',
  //     offerPrice: '450',
  //     actualPrice: '500',
  //     pricePercentile: '10',
  //     productImg: '../../../assets/tab1.jpg'
  //   },
  //   {
  //     id: 2,
  //     tabName: 'VITAMIN C',
  //     pCapacity: '250mg',
  //     nofTablets: '100',
  //     offerPrice: '100',
  //     actualPrice: '200',
  //     pricePercentile: '50',
  //     productImg: '../../../assets/tab2.jpg'
  //   },
  //   {
  //     id: 3,
  //     tabName: 'VITAMIN D',
  //     pCapacity: '50mg',
  //     nofTablets: '120',
  //     offerPrice: '150',
  //     actualPrice: '200',
  //     pricePercentile: '25',
  //     productImg: '../../../assets/tab3.jpg'
  //   },
  //   {
  //     id: 4,
  //     tabName: 'VITAMIN A',
  //     pCapacity: '500mg',
  //     nofTablets: '60',
  //     offerPrice: '450',
  //     actualPrice: '500',
  //     pricePercentile: '10',
  //     productImg: '../../../assets/tab4.jpg'
  //   },
  //   {
  //     id: 5,
  //     tabName: 'FOLIC ACID',
  //     pCapacity: '50mg',
  //     nofTablets: '60',
  //     offerPrice: '450',
  //     actualPrice: '450',
  //     pricePercentile: '10',
  //     productImg: '../../../assets/tab3.jpg'
  //   },
  //   {
  //     id: 6,
  //     tabName: 'DOLO 650',
  //     pCapacity: '650mg',
  //     nofTablets: '60',
  //     offerPrice: '450',
  //     actualPrice: '450',
  //     pricePercentile: '10',
  //     productImg: '../../../assets/tab2.jpg'
  //   },
  //   {
  //     id: 7,
  //     tabName: 'FOLIC ACID',
  //     pCapacity: '50mg',
  //     nofTablets: '60',
  //     offerPrice: '450',
  //     actualPrice: '450',
  //     pricePercentile: '10',
  //     productImg: '../../../assets/tab1.jpg'
  //   },
  //   {
  //     id: 8,
  //     tabName: 'DOLO 650',
  //     pCapacity: '650mg',
  //     nofTablets: '60',
  //     offerPrice: '450',
  //     actualPrice: '450',
  //     pricePercentile: '10',
  //     productImg: '../../../assets/tab4.jpg'
  //   },
  // ]

  getAllProducts(){
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.get(productUrl).pipe(catchError(() => {
      return of('data not available at this time');
    }));
  }

  getAllCategories(){
    const categoriesUrl = 'http://localhost:3000/categories';

    return this.httpClient.get(categoriesUrl);
  }

  viewProduct(getProductId: any){
    const productUrl = 'http://localhost:3000/products/'+ getProductId;
    return this.httpClient.get(productUrl); // return an observable
  }

}
