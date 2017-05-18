
import {LocalStorageService} from "./LocalStorageService";

describe("Service: LocalStorageService", () => {
  let localStorageService: LocalStorageService;
  let store = {
    "name1" : "value1"
  };
  beforeEach(() => {

    spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
      return store[key] || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
      delete store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
      return store[key] = <string>value;
    });

    localStorageService = new LocalStorageService();
  });

  describe("on setItem()", () => {
    it("should set localStorage", () => {
      localStorageService.setItem("name2", "value2");
      expect(localStorage.setItem).toHaveBeenCalledWith("name2", "value2");
    });
  });

  describe("on getItem()", () => {
    it("should get localStorage", () => {
      let actual = localStorageService.getItem("name1");
      expect(localStorage.getItem).toHaveBeenCalledWith("name1");
      expect(actual).toBe("value1");
    });
  });

  describe("on removeItem()", () => {
    it("should remove localStorage", () => {
      localStorageService.removeItem("name1");
      expect(localStorage.removeItem).toHaveBeenCalledWith("name1");
    });
  });
});