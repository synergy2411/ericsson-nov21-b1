import { User } from "./user.model";

export const USER_DATA : Array<User> = [
  {
  firstName : "bill",
  lastName : "gates",
  income : 50000,
  dob : new Date('Dec 21, 1964'),
  isWorking : true,
  company : "microsoft",
  imgSrc : "./assets/images/bill.jpg",
  votes : 120,
  comments : [
    {stars : 4, body : "Awesome work", author : "foo@test.com"},
    {stars : 5, body : ".....", author : "bar@test.com"},
  ]
},
  {
  firstName : "steve",
  lastName : "jobs",
  income : 0,
  dob : new Date('Jan 1, 1964'),
  isWorking : false,
  company : "Apple",
  imgSrc : "https://d.newsweek.com/en/full/663518/steve-jobs.jpg",
  votes : 180,
  comments : [
    {stars : 4, body : "Great work", author : "xyz@test.com"}
  ]
},
  {
  firstName : "tim b.",
  lastName : "lee",
  income : 30000,
  dob : new Date('Aug 1, 1964'),
  isWorking : true,
  company : "World Wide Web",
  imgSrc : "https://ichef.bbci.co.uk/images/ic/1280xn/p025m2fq.jpg",
  votes : 110,
  comments : []
},
]
