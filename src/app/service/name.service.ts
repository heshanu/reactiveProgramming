import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface MyObject {
  name: string;
  id: number;
}


@Injectable({
  providedIn: 'root'
})

export class NameService {

  constructor() { }

  getMyObjects(): Observable<MyObject[]> {
    const myObjects: MyObject[] = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
      { id: 3, name: 'Object 3' }
    ];
    return of(myObjects);
  }
}
