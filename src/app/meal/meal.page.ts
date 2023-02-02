import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealdbApiService } from '../services/mealdb-api.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MEALDB_Meal } from '../services/model';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from '../services/storage/storage.service';


@Component({
    selector: 'app-meal',
    templateUrl: './meal.page.html',
    styleUrls: ['./meal.page.scss']
    
})
export class MealPage implements OnInit {
    id: string;
    // ulozenaJidlaPole: Array<Array<any>> = [];
    // oblibenaJidlaPole: Array<Array<any>> = [];  //____________________________________________

    ulozenaJidlaPole: Array<string> = [];
    oblibenaJidlaPole: Array<string> = [];  //____________________________________________

    meal$: Observable<any>;
    ingredients;
    instructions;
    constructor(
        private localStorage : StorageService,
        private activatedRoute: ActivatedRoute,
        private mealdb: MealdbApiService,
        private sanitizer: DomSanitizer
    ) {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.meal$ = this.mealdb.getMealById(this.id).pipe(
            tap(meal => {
                console.log(meal);
                this.ingredients = this.getIngredientsArray(meal);
                this.instructions = this.convertInstructionToArray(meal);
            })
        );
    }

    ngOnInit() {}

    getYoutubeLink(meal: MEALDB_Meal) {
        // "https://www.youtube.com/watch?v=NZVo32n7iS8"
        const id = meal.strYoutube.split('=')[1];
        return this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`
        );
    }

    getIngredientsArray(meal: MEALDB_Meal) {
        const results = [];
        for (let i = 1; i <= 20; i++) {
            results.push([meal['strIngredient' + i], meal['strMeasure' + i]]);
        }
        return results.filter(i => !!i[0]);
    }

    convertInstructionToArray(meal: MEALDB_Meal) {
        return meal.strInstructions.split('\n').filter(i => i.trim());
    }

    // async toSaved(meal: any) {
    //     console.log("meal", meal);
    //     this.ulozenaJidlaPole = await this.localStorage.getData("ulozenaJidla");
    //     console.log("ulozenaJidla", this.ulozenaJidlaPole)

    //     if(this.ulozenaJidlaPole != null){
    //         this.ulozenaJidlaPole.push(meal);
    //         this.localStorage.setData("ulozenaJidla", this.ulozenaJidlaPole);
    //     }else{
    //         this.ulozenaJidlaPole.push(meal);
    //         this.localStorage.setData("ulozenaJidla", this.ulozenaJidlaPole);
    //     }
        

    //     // if (!this.ulozenaJidlaPole.includes(meal)) {
    //     //   this.ulozenaJidlaPole.push(meal);
    //     //   this.localStorage.setData("ulozenaJidla", this.ulozenaJidlaPole);
    //     // }
    // }

    async toSaved(meal: any) {
        console.log("meal", meal);
        this.ulozenaJidlaPole = await this.localStorage.getData("ulozenaJidla");
        console.log("ulozenaJidla", this.ulozenaJidlaPole)

        if(this.ulozenaJidlaPole == null){
            this.ulozenaJidlaPole = [];
        }

        if (!this.ulozenaJidlaPole.includes(meal)) {
            this.ulozenaJidlaPole.push(meal);
            this.localStorage.setData("ulozenaJidla", this.ulozenaJidlaPole);
          }
        
        
    }
    
      
    async toFavourite(meal : any){
        console.log("mela", meal);
        this.oblibenaJidlaPole = await this.localStorage.getData("oblibenaJidla");
        console.log("oblineaJidla", this.oblibenaJidlaPole);


        if(this.oblibenaJidlaPole == null){
            this.oblibenaJidlaPole = [];
        }

        if(!this.oblibenaJidlaPole.includes(meal)){
            this.oblibenaJidlaPole.push(meal);
            this.localStorage.setData("oblibenaJidla", this.oblibenaJidlaPole);
        }


        

        // if (!this.oblibenaJidlaPole.includes(meal)) {
        //     console.log(this.oblibenaJidlaPole);
        //     this.oblibenaJidlaPole.push(meal);
        //     console.log(this.oblibenaJidlaPole);
        //     this.localStorage.setData("oblibenaJidla", this.oblibenaJidlaPole);
        //     console.log(this.oblibenaJidlaPole);
        // }
    }
}
