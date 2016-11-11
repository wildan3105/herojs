import { InMemoryDataService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Superman'},
      {id: 2, name: 'Batman'},
      {id: 3, name: 'Spider-Man'},
      {id: 4, name: 'Thor'},
      {id: 5, name: 'Hal Jordan'},
      {id: 6, name: 'Wonder Woman'},
      {id: 7, name: 'Captain America'},
      {id: 8, name: 'Martian Manhunter'},
      {id: 9, name: 'Hulk'},
      {id: 10, name: 'Arrow'}
    ];
    return {heroes};
  }
}
