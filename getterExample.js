class Houses{
    constructor(oldHouse, newHouse){
        this.oldHouse = oldHouse;
        this.newHouse = newHouse;

    }
    get allHouses(){
        return `The oldhouse name is ${this.oldHouse} and the new house name is ${this.newHouse} `
    }
}

const houses = new Houses("2900 Carling Avenue, Ottawa, Ontario ", "777, rue Victor Beaudry, Gatineau, Qsuebec")
console.log(houses.allHouses)











getterandsettersEX1.js;