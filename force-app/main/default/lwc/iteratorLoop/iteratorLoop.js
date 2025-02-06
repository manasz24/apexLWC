import { LightningElement } from 'lwc';

export default class IteratorLoop extends LightningElement {
    carList=["Ford", "Audi", "BMW", "Fiat", "Renault","maruti","toyota","daihatsu"];

    ceoList = [
        {   id: 1,
            name: "John",
            age: "30",
            car: "BMW"
        },
        {   id: 2,
            name: "Jane",
            age: "25",
            car: "Audi"
        },
        {   id: 3,
            name: "Alex",
            age: "35",
            car: "Fiat"
        },
        {   id: 4,
            name: "Jack",
            age: "28",
            car: "Renault"
        }
    ]

}