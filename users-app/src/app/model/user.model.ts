export interface User {
  firstName: string;
  lastName: string;
  income: number;
  dob: Date;
  isWorking: boolean;
  company: string;
  imgSrc: string;
  votes: number;
  comments? : Array<Comment>;
}

export interface Comment{
  stars : number;
  body: string;
  author : string;
}
