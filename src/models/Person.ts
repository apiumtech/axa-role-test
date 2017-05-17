import {IPerson} from "./IPerson";
export class Person implements IPerson{
  public age: number;
  public friends:Array<string>;
  public hair_color:string;
  public weight: number;
  public height:number;
  public id:number;
  public name:string;
  public professions:Array<string>;
  public thumbnail: string;

  constructor(personObj: IPerson){
    this.id = personObj.id || null;
    this.name = personObj.name || null;
    this.thumbnail = personObj.thumbnail || null;
    this.age = personObj.age || null;
    this.hair_color = personObj.hair_color || null;
    this.weight = (personObj.weight) ? Math.round(personObj.weight * 100) / 100 : null;
    this.height = (personObj.height) ? Math.round(personObj.weight * 100) / 100 : null;
    this.friends = personObj.friends || [];
    this.professions = personObj.professions || [];

  }
}