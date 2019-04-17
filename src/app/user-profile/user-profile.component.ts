import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  specificProfileImage

  constructor(private imgService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      this.imgService
        .getSpecificProfile(this.route.snapshot.params.userID)
        .subscribe(response => {
          this.specificProfileImage = response
        })
    }, 3000)
  }

}
