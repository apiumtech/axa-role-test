import {Person} from "./Person";
import {ICity} from "./ICity";
export class City implements ICity{
  public id: number;
  public name: string;
  public persons:Array<Person>;

  constructor(cityObj: ICity){
    this.id = cityObj.id;
    this.name = cityObj.name || null;
    this.persons = cityObj.persons || [];
  }
}