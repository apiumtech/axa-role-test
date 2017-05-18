import "./app/index";
import * as angular from "angular";

import "font-awesome/css/font-awesome.css";
import "./styles/screen.scss";

angular.module("app", ["app.application"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});