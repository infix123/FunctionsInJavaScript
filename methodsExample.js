const country = {
	population: 0,
	numberOfCountriesAround: 0,
	nameOfCountry: null,
	landMass: null,

	population_function: function (countriespopulation, country) {
		this.population += countriespopulation;
		this.nameOfCountry = country;
		console.log("--------------------------------------------------");
		console.log(`The number of population in ${this.nameOfCountry} is ${this.population}`);
		console.log("---------------------------------------------------");
	},
};

country.population_function(40000000, "Canada");

function getnumberofcountries(numcountries) {
	console.log("What is the total number of countries around Canada?");
	
	country.numberOfCountriesAround = numcountries;
	console.log(
		`The total number of country around the Canada is ${country.numberOfCountriesAround}`
	);
}

getnumberofcountries(89);
