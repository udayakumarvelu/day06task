//XML HTTp REQUEST
// These is used to interact with the server via api

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()
request.onload = function(){

    
    var res = JSON.parse(request.response);
    console.log(res)
    
    // A - Get all the countries from Asia continent /region using Filter method
    var country = res.filter((ele) => ele.region == "Asia" )
    console.log(country)

    // b - Get all the countries with a population of less than 2 lakhs using Filter method
    var population = res.filter((ele) => ele.population < 200000 )
    console.log(population)

    //C - Print the following details name, capital, flag, using forEach method
    res.forEach((item) => {
        var name = item.name;
        console.log(name)

        var flag = item.flag;
        console.log(flag)

        var capital = item.capital;
        console.log(capital)
    });

    // D- Print the total population of countries using reduce method
    var country = res.filter((ele) => ele.region)
    console.log(country)
    var population = country.map((ele) => ele.population )
    console.log(population)
    var addPopulation = population.reduce((acc,cv) => acc+cv , 0)
    console.log(addPopulation)

// e - Print the country that uses US dollars as currency.

    var currencies = res.filter((ele) => ele.currencies);
    console.log(currencies);
    var currenciesName = currencies.filter((ele) => ele.currencies.USD);
    console.log(currenciesName);
    console.log("Country Names:");
    currenciesName.forEach((ele) => console.log(ele.continents));
    
}