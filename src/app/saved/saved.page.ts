import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  ulozenaJidlaPole: Array<string> = [];  

  constructor(private localStorage : StorageService, private router: Router) {  }
  ngOnInit() {

  }
  ionViewWillEnter(){this.loadData()}
  

  async loadData() {
    this.ulozenaJidlaPole = await this.localStorage.getData('ulozenaJidla');
    console.log("zeby ulozena jidla");
    console.log(this.ulozenaJidlaPole);
  }
  onImageClick(){
      console.log("Image clicked");
      this.router.navigate(["tabs/home"])

  }
}
