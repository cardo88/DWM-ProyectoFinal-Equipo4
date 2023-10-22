import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-create-activity',
    templateUrl: './create-activity.component.html',
    styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

    productForm: FormGroup;
    titulo = 'Crear producto';
    id: string | null;
    constructor(private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private _productService: ProductService,
        private aRouter: ActivatedRoute) {
        this.productForm = this.fb.group({
            nombre: ['', Validators.required],
            categoria: ['', Validators.required],
            ubicacion: ['', Validators.required],
            precio: ['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.edit();
    }

    addProduct() {

        const PRODUCT: Product = {
            nombre: this.productForm.get('nombre')?.value,
            categoria: this.productForm.get('categoria')?.value,
            ubicacion: this.productForm.get('ubicacion')?.value,
            precio: this.productForm.get('precio')?.value,
        }

        console.log(PRODUCT);
        this._productService.saveProduct(PRODUCT).subscribe(data => {
            this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
            this.router.navigate(['/']);
        })
    }

    edit() {
        if (this.id !== null) {
            this.titulo = 'Editar producto';
            this._productService.getProduct(this.id).subscribe(data => {
                this.productForm.setValue({
                    nombre: data.nombre,
                    categoria: data.categoria,
                    ubicacion: data.ubicacion,
                    precio: data.precio,
                })
            })
        }
    }

}