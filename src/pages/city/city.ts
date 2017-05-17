import {ICityService} from "../../services/ICityService";
import {City} from "../../models/City";
export class PageCityComponent implements ng.IDirective {
  public template: string = require("./city.html");
  public restrict: string = "E";
  public replace: boolean = true;
  public controller: Function = PageCityController;
  public controllerAs: string = 'ctrl';
}

export class PageCityController {
  public static $inject: any = ["$scope", "$routeParams", "ICityService"];

  public id: number = null;

  constructor(public $scope: any,
              public $routeParams: any,
              public cityService: ICityService) {

    this.id = $routeParams.id;

    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term


    if(this.id) {
      cityService.getCityById(this.id).then(
        (data) => this.successAllCities(data),
        (error) => this.errorAllCities(error));
    }

  }

  successAllCities(city: City) {
    console.log(city);
    this.$scope.city = city;
  }

  errorAllCities(response) {
    console.log(response);
  }
}