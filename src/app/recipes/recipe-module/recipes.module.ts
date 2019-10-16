import {NgModule} from '@angular/core';
import {RecipesComponent} from '../recipes.component';
import {RecipeStartComponent} from '../recipe-start/recipe-start.component';
import {RecipeListComponent} from '../recipe-list/recipe-list.component';
import {RecipeDetailComponent} from '../recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from '../recipe-list/recipe-item/recipe-item.component';
import {RecipeEditComponent} from '../recipe-edit/recipe-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RecipesRoutingModule} from './recipe-routing.module';
import {SharedModule} from '../../shared/shared/shared.module';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeEditComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    RecipesRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule {
}
