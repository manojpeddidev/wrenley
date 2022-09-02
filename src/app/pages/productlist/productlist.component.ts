import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor(private service: ProductdetailsService) { }
  productData: any;
  ngOnInit(): void {
    this.productData = this.service.productdetails;
  }

}
