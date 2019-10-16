import {Action} from '@ngrx/store';

import {Ingredient} from '../../shared/ingredient.model';

export const enum ShoppingListEnum {
  ADD_INGREDIENT = '[Shopping List] ADD_INGREDIENT',
  ADD_INGREDIENTS = '[Shopping List] ADD_INGREDIENTS',
  UPDATE_INGREDIENT = '[Shopping List] UPDATE_INGREDIENT',
  DELETE_INGREDIENT = '[Shopping List] DELETE_INGREDIENT',
  START_EDIT = '[Shopping List] START_EDIT',
  STOP_EDIT = '[Shopping List] STOP_EDIT'
}

export class AddIngredient implements Action {
  readonly type = ShoppingListEnum.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class AddIngredients implements Action {
  readonly type = ShoppingListEnum.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
  }
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListEnum.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListEnum.DELETE_INGREDIENT;

  constructor() {
  }
}

export class StartEdit implements Action {
  readonly type = ShoppingListEnum.START_EDIT;

  constructor(public payload: number) {
  }
}

export class StopEdit implements Action {
  readonly type = ShoppingListEnum.STOP_EDIT;
}

export type ShoppingListActions = AddIngredient |
  AddIngredients |
  UpdateIngredient |
  DeleteIngredient |
  StartEdit |
  StopEdit;
