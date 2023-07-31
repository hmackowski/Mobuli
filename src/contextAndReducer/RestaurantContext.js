import { createContext } from "react";

export const RestaurantContext = createContext(null);


export const initialRest = {
  money: 90000,
  openWeekends: false,
  employees: [
    {name: 'Haskell', role: 'chef'},
    {name: 'Mark Anthony', role: 'boss'}

  ],
  menu: [
    {name: 'Taco', price: 3.75},
    {name: 'Pizza', price: 9.99}

  ]
}
