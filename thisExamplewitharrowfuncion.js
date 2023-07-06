function Aircraft(model, capacity){
    this.model = model;
    this.capacity = capacity;

    this.printmodel = () =>{
        console.log(this.model);
    };
}

const b737 = new Aircraft("Boeing 232", 190);
b737.printmodel();


const boeing747 = {
	make: "boeing 746",
	capacity: 450,

	print:() => {
		console.log(this);
	},
};

boeing747.print();