import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//   },
//     { path: '', redirectTo: 'tabs', pathMatch: 'full' },
//     { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
//     { path: 'meal/:id', loadChildren: () => import('./meal/meal.module').then(m => m.MealPageModule) }
// ];

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./saved/saved.module').then( m => m.SavedPageModule)
  },
  {
    path: 'meal/:id',
    loadChildren: () => import('./meal/meal.module').then( m => m.MealPageModule)
  }
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
