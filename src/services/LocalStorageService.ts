import {ILocalStorageService} from "./ILocalStorageService";
export class LocalStorageService implements ILocalStorageService{

    constructor() {}

    setItem(name: string, value: string): void {
        window.localStorage.setItem(name, value);
    }

    getItem(name: string): string {
        return window.localStorage.getItem(name);
    }

    removeItem(name: string): void {
        window.localStorage.removeItem(name);
    }
}