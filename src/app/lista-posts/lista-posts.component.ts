import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/postinterface';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  servicios: Post[];



  constructor(private postsService: PostService) {
    this.servicios = [];
  }

  ngOnInit(): void {

    this.servicios = this.postsService.getAll()
  }

  onChange($event: any) {
    this.servicios = this.postsService.getByCategory($event.target.value)
    console.log($event.target.value);
  }

}
