import { Injectable } from "@angular/core";
import { ShowCaseService } from "@modules/show-case/services/show-case.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

@Injectable()
export class ItemsEffect {

  loadItems$ = createEffect( () => this.actions$.pipe(
    ofType('[Item List] Load Items'),
    mergeMap(() => this.showCaseService.getDataApi()
    .pipe(
      map( items => ({ type: '[Item List] Loaded Succes', items})),
      catchError(() => EMPTY)
    ))
   )
  )

  constructor(
    private actions$: Actions,
    private showCaseService: ShowCaseService
  ){}
}