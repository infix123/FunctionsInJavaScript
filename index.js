let airport = {
	name: "heathrow",
	nbDepartureToday: 50,

	addDepature() {
		this.nbDepartureToday++;
		console.log(this.nbDepartureToday);
	},
};

airport.addDepature();

class airport2 {
	depaturetotal = 0;
	constructor(name) {
		this.name = name;
	}

	addDepature2() {
		this.depaturetotal++;
		console.log(this.depaturetotal);
	}
}

const c = new airport2("het");
c.addDepature2;

const aircraft = {model:'Airbus A330', totalSeats:350, seatsOccupied:100};
const addPasenger = function(numberofPassengers){
    const NewCount = this.seatsOccupied + numberofPassengers
    if(NewCount <= this.totalSeats){
        this.seatsOccupied = NewCount

    }

    console.log(this.seatsOccupied)
}

addPasenger(3)
addPasenger.call(aircraft, 7)
