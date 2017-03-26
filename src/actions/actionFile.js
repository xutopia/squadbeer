// all actions for all components
import axios from 'axios';
import {
  FETCH_BEERS_FROM_FOOD,
  FETCH_FOODS_FROM_BEER
} from './actionTypes';

export const fetchBeersByFood = (food) => {
  const request = axios.post(`/api/foodToBeers`, { food });

  return {
    type: FETCH_BEERS_FROM_FOOD,
    payload: request
  };
}

export const fetchFoodsByBeer = (beer) => {
  const request = axios.post(`/api/beerToFoods`, { beer });

  return {
    type: FETCH_FOODS_FROM_BEER,
    payload: request
  };
}
