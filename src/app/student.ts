export class Student{
  id: number;
  name: string;
  phoneno: number;
  department: String;
  city: string;
  email: string;
   constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
