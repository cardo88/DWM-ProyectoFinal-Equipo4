import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-list-activities',
    templateUrl: './list-activities.component.html',
    styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

    listActivities: Product[] = [];

    constructor(
        private _productService: ProductService, 
        private toastr: ToastrService,
        private router: Router
        ) { }

    ngOnInit(): void {
        this.getProducts();
    }


    getProducts() {
        this._productService.getProducts().subscribe(data => {
            this.listActivities = data;
        });
    }

    deleteProduct(event: Event, id: any) {        
        this._productService.deleteProduct(id).subscribe(data => {
        this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
          this.getProducts(); // Puedes cargar la lista de productos nuevamente si es necesario
        });

        event.preventDefault();
    }

    redirectToTriviaConfig() {
        this.router.navigate(['/create-question']);
    }
}

// deleteProduct(event: Event, productId: string) {
//     // Realiza tus acciones de eliminación aquí
    
//     // Evita la navegación
//     event.preventDefault();
//   }