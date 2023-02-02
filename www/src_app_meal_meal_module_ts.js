(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_meal_meal_module_ts"],{

/***/ 1605:
/*!*************************************!*\
  !*** ./src/app/meal/meal.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPageModule": () => (/* binding */ MealPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _meal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal.page */ 3069);







const routes = [{
  path: '',
  component: _meal_page__WEBPACK_IMPORTED_MODULE_0__.MealPage
}];
let MealPageModule = class MealPageModule {};
MealPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_meal_page__WEBPACK_IMPORTED_MODULE_0__.MealPage]
})], MealPageModule);


/***/ }),

/***/ 3069:
/*!***********************************!*\
  !*** ./src/app/meal/meal.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPage": () => (/* binding */ MealPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _meal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal.page.html?ngResource */ 2905);
/* harmony import */ var _meal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal.page.scss?ngResource */ 187);
/* harmony import */ var _meal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_meal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_mealdb_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mealdb-api.service */ 8171);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3663);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage/storage.service */ 6578);









let MealPage = class MealPage {
  constructor(localStorage, activatedRoute, mealdb, sanitizer) {
    this.localStorage = localStorage;
    this.activatedRoute = activatedRoute;
    this.mealdb = mealdb;
    this.sanitizer = sanitizer;
    // ulozenaJidlaPole: Array<Array<any>> = [];
    // oblibenaJidlaPole: Array<Array<any>> = [];  //____________________________________________
    this.ulozenaJidlaPole = [];
    this.oblibenaJidlaPole = []; //____________________________________________
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.meal$ = this.mealdb.getMealById(this.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(meal => {
      console.log(meal);
      this.ingredients = this.getIngredientsArray(meal);
      this.instructions = this.convertInstructionToArray(meal);
    }));
  }
  ngOnInit() {}
  getYoutubeLink(meal) {
    // "https://www.youtube.com/watch?v=NZVo32n7iS8"
    const id = meal.strYoutube.split('=')[1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`);
  }
  getIngredientsArray(meal) {
    const results = [];
    for (let i = 1; i <= 20; i++) {
      results.push([meal['strIngredient' + i], meal['strMeasure' + i]]);
    }
    return results.filter(i => !!i[0]);
  }
  convertInstructionToArray(meal) {
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
  toSaved(meal) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      console.log("meal", meal);
      this.ulozenaJidlaPole = yield this.localStorage.getData("ulozenaJidla");
      console.log("ulozenaJidla", this.ulozenaJidlaPole);
      if (this.ulozenaJidlaPole == null) {
        this.ulozenaJidlaPole = [];
      }
      if (!this.ulozenaJidlaPole.includes(meal)) {
        this.ulozenaJidlaPole.push(meal);
        this.localStorage.setData("ulozenaJidla", this.ulozenaJidlaPole);
      }
    });
  }
  toFavourite(meal) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      console.log("mela", meal);
      this.oblibenaJidlaPole = yield this.localStorage.getData("oblibenaJidla");
      console.log("oblineaJidla", this.oblibenaJidlaPole);
      if (this.oblibenaJidlaPole == null) {
        this.oblibenaJidlaPole = [];
      }
      if (!this.oblibenaJidlaPole.includes(meal)) {
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
    });
  }
};

MealPage.ctorParameters = () => [{
  type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _services_mealdb_api_service__WEBPACK_IMPORTED_MODULE_2__.MealdbApiService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
}];
MealPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-meal',
  template: _meal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_meal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MealPage);


/***/ }),

/***/ 187:
/*!************************************************!*\
  !*** ./src/app/meal/meal.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2905:
/*!************************************************!*\
  !*** ./src/app/meal/meal.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"meal$ | async as meal\">\n    <ion-header>\n        <ion-toolbar>\n            <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\n            <ion-title>{{ meal.strMeal }}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <iframe\n            id=\"ytplayer\"\n            type=\"text/html\"\n            width=\"100%\"\n            height=\"360\"\n            [src]=\"getYoutubeLink(meal)\"\n            frameborder=\"0\"\n        ></iframe>\n        <ion-item lines=\"none\">\n            <h1>\n                {{ meal.strMeal }}\n                <ion-badge color=\"secondary\">{{ meal.strCategory }}</ion-badge>\n                \n            </h1>\n            <ion-icon name=\"bookmark\" (click)=toSaved(meal)></ion-icon>\n            <ion-icon name=\"heart\" (click)=toFavourite(meal)></ion-icon>\n        </ion-item>\n\n        <ion-list>\n            <ion-list-header>\n                <ion-label>Ingredients</ion-label>\n            </ion-list-header>\n            <ion-item *ngFor=\"let ingredient of ingredients\">\n                <ion-label>{{ ingredient[0] | titlecase }}: </ion-label>\n                <ion-note color=\"dark\">{{ ingredient[1] }}</ion-note>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-list-header>\n                <ion-label>Instructions</ion-label>\n            </ion-list-header>\n            <ion-item *ngFor=\"let instruction of instructions\" lines=\"none\">\n                <ion-label text-wrap>{{ instruction }}</ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ng-container>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_meal_meal_module_ts.js.map