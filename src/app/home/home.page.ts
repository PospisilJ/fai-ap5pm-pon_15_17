import { Component } from '@angular/core';
import { MealdbApiService } from '../services/mealdb-api.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    meals$ = this.mealdb.meals$;

    constructor(private mealdb: MealdbApiService, private router: Router) {
        this.loadData();
    }
    

    loadData($event?) {
        this.mealdb
            .getMealList()
            .pipe(take(1))
            .subscribe(done => {
                if ($event) {
                    $event.target.complete();
                }
            });
    }

    onImageClick(){
        console.log("Image clicked");
        this.router.navigate(["/"])

    }
}
