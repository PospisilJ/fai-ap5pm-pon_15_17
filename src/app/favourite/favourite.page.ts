import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  oblibenaJidlaPole: Array<string> = [];  

  constructor(private localStorage : StorageService, private router: Router) {}
  ngOnInit() {

  }
  ionViewWillEnter(){this.loadData()}
  

  async loadData() {
    this.oblibenaJidlaPole = await this.localStorage.getData('oblibenaJidla');
    console.log("zeby oblibena jidla");
    console.log(this.oblibenaJidlaPole);
  }
  onImageClick(){
      console.log("Image clicked");
      this.router.navigate(["tabs/home"])

  }
}
