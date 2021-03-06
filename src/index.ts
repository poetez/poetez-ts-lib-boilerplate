import {sum} from './test/sum';

export class Student {
  public fullName: string;
  public sum = sum;

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

export interface IPerson {
  firstName: string;
  lastName: string;
}

export function greeter(person: IPerson): string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}
