import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getUserL()
  }

  getUserL(){
    this.imageService.getUserList().subscribe(response => {
    
      this.users = response
    })

  }

}
