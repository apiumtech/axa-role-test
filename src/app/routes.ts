config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
        .when("/cities", {
            template: "<page-cities></page-cities>"
        })
        .when("/city/:id", {
            template: "<page-city></page-city>"
        })
        .when("/about", {
            template: "<page-about></page-about>"
        })
        .otherwise({redirectTo : '/cities'});
}