import "../../index";
import * as angular from "angular";
import "angular-mocks";
import {ComponentTest} from "../../util/ComponentTest";
import {PageCityController} from "./city";
import {ICityService} from "../../services/ICityService";

describe("Component PageCityComponent", () => {
  let directiveTest: ComponentTest<PageCityController>;
   let cityServiceMock: ICityService;
  beforeEach(angular.mock.module("app.application", ($provide: any) => {
    cityServiceMock = <ICityService>jasmine.createSpyObj("CityService", ["getCityById"]);
    //spyOn(cityServiceMock, 'getCityById').and.callThrough();
    $provide.service("ICityService", () => cityServiceMock);
  }));
  beforeEach(() => {
    directiveTest = new ComponentTest<PageCityController>("<page-city></page-city>", "pageCity");
  });

  describe("constructor", ()=>{
    it("should init the cityService", () => {
     // var vm: PageCityController = directiveTest.createComponent({});
      //expect(vm.cityService).toBe(cityServiceMock);
    });
  });

  describe("onInit", ()=>{
    it("should init the cityService", () => {
      let vm: PageCityController = directiveTest.createComponent({});
      spyOn(vm, 'infiniteScroll').and.callThrough();
      expect( vm.cityService.getCityById).not.toHaveBeenCalled();
    });

    it("should init the scope table", () => {
      let vm: PageCityController = directiveTest.createComponent({});
      expect(angular.toJson(vm.$scope.table)).toBe(JSON.stringify({
        sortType: '',
        sortReverse: false,
        searchFish: '',
        headers: [
          {text: ''},
          {field: 'name', text: 'Name', class: 'sorting'},
          {field: 'age', text: 'Age', class: 'sorting', extraClass: 'hidden-xs'},
          {field: 'hair_color', text: 'Hair color', class: 'sorting', extraClass: 'hidden-xs'},
          {field: 'weight', text: 'Weight', class: 'sorting', extraClass: 'hidden-xs'},
          {field: 'Height', text: 'Height', class: 'sorting', extraClass: 'hidden-xs'},
          {text: 'Friends', extraClass: 'hidden-xs'},
          {text: 'Professions', extraClass: 'hidden-xs'},
        ]
      }));
    });
  });

  describe("infiniteScroll", ()=> {
    it("should init the scope pagination", () => {
      let vm: PageCityController = directiveTest.createComponent({});
      vm.infiniteScroll();
      expect(vm.$scope.currentPage).toBe(1);
      expect(vm.$scope.limitToElements).toBe(20);
    });
  });

  describe("initInfiniteScroll", ()=> {
    it("should init the scope pagination", () => {
      let vm: PageCityController = directiveTest.createComponent({});
      vm.infiniteScroll();
      expect(vm.$scope.currentPage).toBe(1);
      expect(vm.$scope.limitToElements).toBe(20);
    });
  })

  });




