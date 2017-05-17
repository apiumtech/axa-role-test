import {City} from "../../models/City";
import {Person} from "../../models/Person";
export class PageCitiesComponent implements ng.IDirective {
    public template: string = require("./cities.html");
    public restrict: string = "E";
    public replace: boolean = true;
    public controller: Function = PageCitiesController;
    public controllerAs: string = 'ctrl';
}

export class PageCitiesController{
    public static $inject: any = ["$scope", "$http"];

    constructor(public $scope: any,
                public $http: ng.IHttpService) {
      $scope.cities = [];
      var that = this;
      this.$http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').success(function(response) {
        Object.keys(response).forEach(key => {
          var persons : Array<Person>= [];
          if(response[key] && response[key].length > 0){
            response[key].forEach((person)=>{
                persons.push(new Person(person));
            })
          }
          that.$scope.cities.push(new City({name: key, persons: persons}));
        });
        console.log(that.$scope.cities);

        return response;
      });

    }




}