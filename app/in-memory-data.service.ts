import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Superman', tag: 'DC'},
      {id: 2, name: 'Batman', tag: 'Marvell'},
      {id: 3, name: 'Spider-Man', tag: 'DC'},
      {id: 4, name: 'Thor', tag: 'Marvell'},
      {id: 5, name: 'Hal Jordan', tag: 'DC'},
      {id: 6, name: 'Wonder Woman', tag: 'Marvell'},
      {id: 7, name: 'Captain America', tag: 'DC'},
      {id: 8, name: 'Martian Manhunter', tag: 'Marvell'},
      {id: 9, name: 'Hulk', tag: 'DC'},
      {id: 10, name: 'Arrow', tag: 'Marvell'}
    ];
    return {heroes};
  }
}
