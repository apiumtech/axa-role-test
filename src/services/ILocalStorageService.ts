export interface ILocalStorageService {
    setItem(name: string, value: string): void;
    getItem(name: string): string;
    removeItem(name: string): void;
}