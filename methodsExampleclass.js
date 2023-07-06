class country{
    population = 0
    numberOfCountriesAround=0
    nameOfCountry=null
    landMass=null

    constructor(numberOfCountriesAround, landMass, Country){
       this.numberOfCountriesAround = numberOfCountriesAround;
       this.landMass = landMass;
       this.nameOfCountry = Country
    }

    population_function(countriespopulation){
        this.population +=countriespopulation     
       console.log("--------------------------------------------------------------------------");
	   console.log(`The number of population in ${this.nameOfCountry} is ${this.population}`);
	   console.log("--------------------------------------------------------------------------");

    }

    getnumberofcountries() {
      
	console.log(`What is the total number of countries around ${this.nameOfCountry}?`);	
	console.log(
		`The total number of country around the ${this.nameOfCountry} is ${this.numberOfCountriesAround}`
	);
    console.log(`What is the landmass of ${this.nameOfCountry}?`);
    console.log(`The landMass of ${this.nameOfCountry} is ${this.landMass}`);
}


}


const countryexampleCanada = new country(90, "45000000", 'Canada')
countryexampleCanada.population_function(4000000000);
countryexampleCanada.getnumberofcountries();

const countryexampleAmerica = new country(45, "1000000", 'United State of America');
countryexampleAmerica.population_function(35000000000,"United State of America");
countryexampleAmerica.getnumberofcountries();


