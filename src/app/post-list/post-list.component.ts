import { Component, Input, OnInit } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post1: Post = new Post('Mon premier post', 
  'Juste au-dessus de Menton, Castillon se classe haut la main parmi'
  + "les sites majeurs des Alpes-Maritimes. On y trouve un rocher d\'une raideur"
  + " et d\'une"
  + " qualité exceptionnelles",
  0,
  new Date());

  post2: Post = new Post('Mon deuxième post', 
  'Juste au-dessus de Menton, Castillon se classe haut la main parmi'
  + "les sites majeurs des Alpes-Maritimes. On y trouve un rocher d\'une raideur"
  + " et d\'une"
  + " qualité exceptionnelles",
  0,
  new Date());

  post3: Post = new Post('Encore un post', 
  'Juste au-dessus de Menton, Castillon se classe haut la main parmi'
  + "les sites majeurs des Alpes-Maritimes. On y trouve un rocher d\'une raideur"
  + " et d\'une"
  + " qualité exceptionnelles",
  0,
  new Date());

  posts = [
    this.post1,
    this.post2,
    this.post3
  ]

 
  constructor() { }

  ngOnInit() {
  }

  
}
