import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  onAddToShoppingList() {
    // this.recipe.ingredients.forEach(ingredient => {
    //   this.slService.addIngredient(ingredient);
    // });
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
    const id = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
