import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Random Item #1",
        price: 0.2,
        image: "https://picsum.photos/id/237/200/300"
      },
      {
        name: "Random Item #2",
        price: 0.1,
        image: "https://picsum.photos/id/11/2500/1667"
      },
      {
        name: "Random Item #3",
        price: 0.3,
        image: "https://picsum.photos/id/21/3008/2008"
      },
      {
        name: "Random Item #4",
        price: 0.4,
        image: "https://picsum.photos/id/22/4434/3729"
      },
      {
        name: "Random Item #5",
        price: 0.5,
        image: "https://picsum.photos/id/27/3264/1836"
      },
      {
        name: "Random Item #6",
        price: 0.6,
        image: "https://picsum.photos/id/28/4928/3264"
      },
      {
        name: "Random Item #7",
        price: 0.7,
        image: "https://picsum.photos/id/23/3887/4899"
      },
      {
        name: "Random Item #8",
        price: 0.8,
        image: "https://picsum.photos/id/25/5000/3333"
      },
      {
        name: "Random Item #9",
        price: 0.9,
        image: "https://picsum.photos/id/26/4209/2769"
      },
      {
        name: "Random Item #10",
        price: 0.9,
        image: "https://picsum.photos/id/7/4728/3168"
      },
      {
        name: "Random Item #11",
        price: 0.9,
        image: "https://picsum.photos/id/6/5000/3333"
      },
      {
        name: "Random Item #12",
        price: 0.9,
        image: "https://picsum.photos/id/4/5000/3333"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
