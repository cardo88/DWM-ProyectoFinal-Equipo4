import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-list-activities',
    templateUrl: './list-activities.component.html',
    styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

    listProducts: Product[] = [];

    constructor(private _productService: ProductService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.getProducts();
    }


    getProducts() {
        this._productService.getProducts().subscribe(data => {
            this.listProducts = data;
        });
    }

    deleteProduct(id: any) {
        this._productService.deleteProduct(id).subscribe(data => {
            this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado');
            this.getProducts();
        })
    }
}