import {ICityService} from "../../services/ICityService";
import {City} from "../../models/City";
export class PageCityComponent implements ng.IDirective {
  public template: string = require("./city.html");
  public restrict: string = "E";
  public replace: boolean = true;
  public controller: Function = PageCityController;
  public controllerAs: string = '$ctrl';
}

export class PageCityController {
  public static $inject: any = ["$scope", "$routeParams", "ICityService"];

  public id: number = null;

  constructor(public $scope: any,
              public $routeParams: any,
              public cityService: ICityService) {

    this.onInit();
  }

  onInit(){
    this.id = this.$routeParams.id;
    this.$scope.table ={
      sortType: '',
      sortReverse: false,
      searchFish: '',
      headers:[
        {text: ''},
        {field: 'name', text: 'Name', class: 'sorting'},
        {field: 'age', text: 'Age', class: 'sorting', extraClass: 'hidden-xs'},
        {field: 'hair_color', text: 'Hair color', class: 'sorting', extraClass: 'hidden-xs'},
        {field: 'weight', text: 'Weight', class: 'sorting', extraClass: 'hidden-xs'},
        {field: 'Height', text: 'Height', class: 'sorting', extraClass: 'hidden-xs'},
        {text: 'Friends', extraClass: 'hidden-xs'},
        {text: 'Professions', extraClass: 'hidden-xs'},
      ]
    };
    this.initInfiniteScroll();

    if(this.id) {
      this.cityService.getCityById(this.id).then(
        (data) => this.successAllCities(data),
        (error) => this.errorAllCities(error));
    }
  }

  successAllCities(city: City) {
    this.$scope.city = city;
  }

  errorAllCities(response) {
    console.log(response);
  }

  changeSort(tableHeader: any){
    if(tableHeader.field) {
      this.$scope.table.sortType = tableHeader.field;
      this.$scope.table.sortReverse = !this.$scope.table.sortReverse;
      this.$scope.table.headers.forEach((header)=>{
        if(header.field) {
          header.class = (header.field === tableHeader.field) ? ((this.$scope.table.sortReverse) ? "sorting_desc" : "sorting_asc") : "sorting";
        }
      });
    }
  }
  onKeyupSearch($event){
    this.initInfiniteScroll();
  }

  infiniteScroll(){
    if(this.$scope.city && this.$scope.limitToElements < this.$scope.city.persons.length) {
      this.$scope.currentPage += 1;
      this.$scope.limitToElements = this.$scope.currentPage * 20;
    }
  }

  initInfiniteScroll(){
    this.$scope.currentPage= 1;
    this.$scope.limitToElements = 20;
  }
}