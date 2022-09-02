import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor() { }
  productdetails = [
    {
      id: 1,
      tabName: 'VITAMIN E',
      pCapacity: '500mg',
      nofTablets: '60',
      offerPrice: '450',
      actualPrice: '500',
      pricePercentile: '10',
      productImg: '../../../assets/tab1.jpg'
    },
    {
      id: 2,
      tabName: 'VITAMIN C',
      pCapacity: '250mg',
      nofTablets: '100',
      offerPrice: '100',
      actualPrice: '200',
      pricePercentile: '50',
      productImg: '../../../assets/tab2.jpg'
    },
    {
      id: 3,
      tabName: 'VITAMIN D',
      pCapacity: '50mg',
      nofTablets: '120',
      offerPrice: '150',
      actualPrice: '200',
      pricePercentile: '25',
      productImg: '../../../assets/tab3.jpg'
    },
    {
      id: 4,
      tabName: 'VITAMIN A',
      pCapacity: '500mg',
      nofTablets: '60',
      offerPrice: '450',
      actualPrice: '500',
      pricePercentile: '10',
      productImg: '../../../assets/tab4.jpg'
    },
    {
      id: 5,
      tabName: 'FOLIC ACID',
      pCapacity: '50mg',
      nofTablets: '60',
      offerPrice: '450',
      actualPrice: '450',
      pricePercentile: '10',
      productImg: '../../../assets/tab3.jpg'
    },
    {
      id: 6,
      tabName: 'DOLO 650',
      pCapacity: '650mg',
      nofTablets: '60',
      offerPrice: '450',
      actualPrice: '450',
      pricePercentile: '10',
      productImg: '../../../assets/tab2.jpg'
    },
    {
      id: 7,
      tabName: 'FOLIC ACID',
      pCapacity: '50mg',
      nofTablets: '60',
      offerPrice: '450',
      actualPrice: '450',
      pricePercentile: '10',
      productImg: '../../../assets/tab1.jpg'
    },
    {
      id: 8,
      tabName: 'DOLO 650',
      pCapacity: '650mg',
      nofTablets: '60',
      offerPrice: '450',
      actualPrice: '450',
      pricePercentile: '10',
      productImg: '../../../assets/tab4.jpg'
    },
  ]
}
