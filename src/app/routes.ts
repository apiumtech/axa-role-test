config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
        .when("/", {
            template: "Hello friends"
        })
        .when("/cities", {
            template: "<page-cities></page-cities>"
        })
        .when("/about", {
            template: "<page-about></page-about>"
        });
}