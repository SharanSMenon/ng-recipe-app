import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import {ShoppingListEnum} from './shopping-list.actions';

export interface ShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: ShoppingListState = {
  ingredients: [
    new Ingredient('Apples', '2'),
    new Ingredient('Strawberries', '2')
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

// Reducer
export const shoppingListReducer = (state: ShoppingListState = initialState, action: ShoppingListActions.ShoppingListActions) => {
  switch (action.type) {
    case ShoppingListEnum.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListEnum.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListEnum.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      };
      const updatedIngredients = [
        ...state.ingredients,
      ];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListEnum.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, i) => i !== state.editedIngredientIndex),
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListEnum.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: {...state.ingredients[action.payload]}
      };
    case ShoppingListEnum.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
};
