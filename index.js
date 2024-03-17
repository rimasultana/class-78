class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(){
        const data = new Data();
        return data.getFullYear() - this.year;
    }
}

const myCar = new Car("BMW", 2002);

console.log(myCar.age());