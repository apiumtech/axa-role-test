import {IPerson} from "./IPerson";
export class Person implements IPerson{
  public age: number;
  public friends:Array<string>;
  public hair_color:string;
  public height:number;
  public id:number;
  public name:string;
  public professions:Array<string>;
  public thumbnail: string;
  public weight: number;

  constructor(personObj: IPerson){
    this.age = personObj.age || null;
    this.friends = personObj.friends || [];
    this.hair_color = personObj.hair_color || null;
    this.height = personObj.height || null;
    this.id = personObj.id || null;
    this.name = personObj.name || null;
    this.professions = personObj.professions || [];
    this.thumbnail = personObj.thumbnail || null;
    this.weight = personObj.weight || null;
  }
}