import IPromise = angular.IPromise;
import {City} from "../models/City";
export interface ICityService {
    getAllCities: () => any;
    getCityById: (id: number) => IPromise<City>;
}