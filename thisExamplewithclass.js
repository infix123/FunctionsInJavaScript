class Aircraft{
    make = '';
    capacity = 0;

    constructor(make, capacity){
    this.make = make;
    this.capacity = capacity;
    }

    print(){
        console.log(this);
    }

}


const boeing747 = new Aircraft("Boeing3455", 450);
boeing747.print()