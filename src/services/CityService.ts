import {ICityService} from "./ICityService";
import {Person} from "../models/Person";
import {City} from "../models/City";
import IPromise = angular.IPromise;
import {ILocalStorageService} from "./ILocalStorageService";
export class CityService implements ICityService {

  public static $inject: Array<string> = ["$http", "$q", "ILocalStorageService"];

  constructor(public $http: ng.IHttpService,
              public $q: ng.IQService,
              public localStorageService: ILocalStorageService) {}

  public getAllCities(): IPromise<Array<City>> {
    return this.getJsonCities().then(
      (data)=> this.successGetAllCities(data),
      (error)=> this.errorGetAllCities(error))
  }

  public getCityById(id: number): IPromise<City> {
    return this.getJsonCities().then(
      (data)=> this.successGetCityById(data, id),
      (error)=> this.errorGetCityById(error, id))
  };

  private successGetCityById(response: string, id: number): City{
    let cities = this.successGetAllCities(response);
    let city: City = null;
    for(let index = 0; index < cities.length; index++){
      if(cities[index] && cities[index].id == id){
        city = cities[index];
        break;
      }
    }
    return city;
  }

  private errorGetCityById(error: string, id: number): City{
    let cities = this.getCitiesOfLocaleStorage();
    let city: City = null;
    for(let index = 0; index < cities.length; index++){
      if(cities[index] && cities[index].id == id){
        city = cities[index];
        break;
      }
    }
    return city;
  }

  private successGetAllCities(response: string): Array<City>{
    let cities = this.parseJsonCities(response);
    this.setCitiesToLocaleStorage(cities);
    return cities;
  }

  private errorGetAllCities(error: string){
    console.error(error);
    return this.getCitiesOfLocaleStorage();
  }

  private parseJsonCities(response: string): Array<City>{
      let cities: Array<City> = [];
      Object.keys(response).forEach((key, index) => {
        let persons: Array<Person> = [];
        if (response[key] && response[key].length > 0) {
          response[key].forEach((person) => {
            persons.push(new Person(person));
          })
        }
        cities.push(new City({id: index, name: key, persons: persons}));
      });

      return cities
  }

  private setCitiesToLocaleStorage(cities: Array<City>){
    this.localStorageService.setItem("cities", JSON.stringify(cities));
  }

  private getCitiesOfLocaleStorage(): Array<City>{
    let citiesString = this.localStorageService.getItem("cities");
    return JSON.parse(citiesString);
  }

  private getJsonCities(): IPromise<string>{
    let that = this;
    return this.$q(function(resolve, reject) {
      that.$http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').success((response) => {
        resolve(response);
      }).error((response) => {
        reject(response);
      });
    });
  }
}

