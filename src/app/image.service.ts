import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const userListUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/users'
const userProfileUrl= 'https://tranquil-beach-87956.herokuapp.com/api/v1/images?userId'


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get(userListUrl)
  }

  getSpecificProfile(userID) {
    return this.http.get(userProfileUrl + `=${userID}`)
  }
}
