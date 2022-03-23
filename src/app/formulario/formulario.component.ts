import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsService: PostService, private router: Router) {
    this.formulario = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      author: new FormControl('', []),
      image: new FormControl('', []),
      category: new FormControl('', []),
      createdAt: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const fechaCreacion = new Date(this.formulario.value.createdAt)

    this.formulario.value.createdAt = fechaCreacion;
    console.log(typeof this.formulario.value.createdAt)

    this.postsService.create(this.formulario.value);
    alert('Post introducido')

    this.router.navigate(['/posts'])
  }

}
