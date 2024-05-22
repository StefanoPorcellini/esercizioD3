import { PostDetailComponent } from './../post-detail/post-detail.component';
import { Component } from '@angular/core';
import { iDataBase, iPost } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

dataBase:iDataBase[] = []

postsArray:iPost[] = []

ngOnInit() {
  this.getDataBase()
}

async getDataBase():Promise<void>{

  let response = await fetch("../assets/db.json")
  let data = <iDataBase[]> await response.json()

  this.dataBase = data
}

}
