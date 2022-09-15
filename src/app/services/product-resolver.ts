import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ProductdetailsService } from './productdetails.service';

@Injectable({
  providedIn: "root"
})
export class ProductsResolver implements Resolve<any> {
  constructor(private router: Router, private productService: ProductdetailsService) {}

  resolve(): Observable<any> {
    return this.productService.getAllProducts().pipe(catchError(() => {
      return EMPTY;
    }));
  }
}
