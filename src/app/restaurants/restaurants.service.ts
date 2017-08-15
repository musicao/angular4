import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import 'rxjs/add/operator/catch'

import {ErrorHandler} from '../app.error-handler'


import {Restaurant} from './restaurant/restaurant.model'
import {MEET_API} from '../app.api'

import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

@Injectable()

export class RestaurantsService{

  constructor(private http:Http ){}

  restaurants(): Observable<Restaurant[]>{
    return  this.http.get(`${MEET_API}/restaurants`).map(response => response.json())
    .catch(ErrorHandler.handleError);
  }


  restaurantById(id:String): Observable<Restaurant>{
    return  this.http.get(`${MEET_API}/restaurants/${id}`).map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id:String): Observable<Restaurant>{
    return  this.http.get(`${MEET_API}/restaurants/${id}/reviews`).map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id:String): Observable<MenuItem[]>{
    return  this.http.get(`${MEET_API}/restaurants/${id}/menu`).map(response => response.json())
    .catch(ErrorHandler.handleError);
  }



}
