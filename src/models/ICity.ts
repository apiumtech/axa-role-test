import {Person} from "./Person";
export interface ICity{
  id: number;
  name: string;
  persons:Array<Person>;
}