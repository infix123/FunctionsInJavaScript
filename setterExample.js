class countries {
	#numberofcountries='';

	constructor(number) {
		this.number = number;
	}

	set num(value) {
		if (!value) {
			throw new Error("Contry must have a value");
		}

		if (value.length < 1) {
			throw new Error("country has few characters");
		}

		this.#numberofcountries = value;
	}
    get num(){
        return this.#numberofcountries
    }
};

const country = new countries(125);
country.num = 90
console.log(country.number); //The constructor object
console.log(country.num);   //The getter and setter
