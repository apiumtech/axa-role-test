import * as angular from "angular";
import "angular-route";
import {config as routesConfig} from "./routes";

import {PageAboutComponent} from "../pages/about/about";
import {AppComponent, AppComponentCtrl} from "./app.component";
import {PageCitiesComponent, PageCitiesController} from "../pages/cities/cities";
// each directive and filter need to be loaded like this:


angular.module("app.application", ["ngRoute"])
  .directive("appComponent", () => new AppComponent())
  .directive("pageAbout", () => new PageAboutComponent())
  .directive("pageCities", () => new PageCitiesComponent())
  .controller("AppComponentCtrl", () => AppComponentCtrl)
  .controller("PageCitiesController", () => PageCitiesController)
  .config(routesConfig);
