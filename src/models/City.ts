import {Person} from "./Person";
import {ICity} from "./ICity";
export class City implements ICity{
  public name: string;
  public persons:Array<Person>;

  constructor(cityObj: ICity){
    this.name = cityObj.name || null;
    this.persons = cityObj.persons || [];
  }

}