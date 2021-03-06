import * as angular from "angular";
import "angular-route";
import "angular-lazy-image";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'ng-infinite-scroll'

import {config as routesConfig} from "./routes";

import {PageAboutComponent} from "../pages/about/about";
import {AppComponent, AppComponentCtrl} from "./app.component";
import {PageCitiesComponent, PageCitiesController} from "../pages/cities/cities";
import {CityService} from "../services/CityService";
import {LocalStorageService} from "../services/LocalStorageService";
import {PageCityComponent, PageCityController} from "../pages/city/city";
import {SearchFilter} from "../filters/SearchFilter";

angular.module("app.application", ["ngRoute", "afkl.lazyImage", 'infinite-scroll'])
  .filter("search", SearchFilter)
  .service("ICityService", CityService)
  .service("ILocalStorageService", LocalStorageService)
  .directive("appComponent", () => new AppComponent())
  .directive("pageAbout", () => new PageAboutComponent())
  .directive("pageCities", () => new PageCitiesComponent())
  .directive("pageCity", () => new PageCityComponent())
  .controller("AppComponentCtrl", () => AppComponentCtrl)
  .controller("PageCitiesController", () => PageCitiesController)
  .controller("PageCityController", () => PageCityController)
  .config(routesConfig);
