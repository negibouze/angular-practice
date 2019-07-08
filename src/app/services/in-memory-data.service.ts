import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from './user.service';
import { LoginContext } from './auth.service';

// Mock Data
const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

const NAME_DATA = [
  'James',
  'Dale',
  'Gaurav',
  'Francisco',
  'Robin',
  'Kamal',
  'Satish',
  'Tushar',
  'Clinton',
  'Kaleb'
];
const AGE_DATA = [48, 41, 38, 23, 52, 21, 42, 33, 50, 51];
const HEIGHT_DATA = [180, 153, 161, 150, 177, 160, 175, 170, 157, 171];
const WEIGHT_DATA = [71, 52, 77, 76, 84, 75, 56, 87, 70, 79];

const USER_DATA: User[] = Array.from(Array(100).keys())
  .map((v, i) => {
    return {
      id: i + 1,
      name: NAME_DATA[getRandomInt(10)],
      age: AGE_DATA[getRandomInt(10)],
      height: HEIGHT_DATA[getRandomInt(10)],
      weight: WEIGHT_DATA[getRandomInt(10)]
    };
  })
  .reduce((acc, v) => acc.concat(v), []);

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      authenticated: [],
      users: USER_DATA
    };
  }

  genId(authenticated: LoginContext[]): number {
    return authenticated.length > 0 ? authenticated.length + 1 : 1;
  }
}
