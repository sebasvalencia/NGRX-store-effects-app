//contiene todos los reducers

import { ActionReducerMap } from "@ngrx/store";

import * as fromPizzas from "./pizzas.reducer";

//la referencia a la interfaz
export interface ProductsState{
    pizzas: fromPizzas.PizzaState
}

//Enlazando nuestro reducers con el reducer, describe como se ve el reducer por el ActionReducerMap
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}


