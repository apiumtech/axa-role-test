import {ICityService} from "../../services/ICityService";
import {City} from "../../models/City";
export class PageCitiesComponent implements ng.IDirective {
  public template: string = require("./cities.html");
  public restrict: string = "E";
  public replace: boolean = true;
  public controller: Function = PageCitiesController;
  public controllerAs: string = 'ctrl';
}

export class PageCitiesController {
  public static $inject: any = ["$scope", "ICityService"];

  constructor(public $scope: any,
              public cityService: ICityService) {

    cityService.getAllCities().then(
      (data) => this.successAllCities(data),
      (error) => this.errorAllCities(error));
  }

  successAllCities(cities: Array<City>) {
    this.$scope.cities = cities;
  }

  errorAllCities(response) {
    console.log(response);
  }
}