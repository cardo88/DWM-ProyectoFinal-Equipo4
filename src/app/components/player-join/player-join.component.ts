import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-join',
  templateUrl: './player-join.component.html',
  styleUrls: ['./player-join.component.css']
})
export class PlayerJoinComponent {

  titulo = 'Unirse a una partida';

  joinForm: FormGroup;
  constructor(private fb: FormBuilder,
    // private router: Router,
    // private toastr: ToastrService,
    // private _productService: ProductService,
    // private aRouter: ActivatedRoute
    ) {
    this.joinForm = this.fb.group({
      nickname: ['', Validators.required],
      code: ['', Validators.required],
    })
  }

  addPlayer(){}
}
