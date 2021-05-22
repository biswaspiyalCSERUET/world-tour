fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then((data) => {
        displayCountries(data)
    })


const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');

        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <a onclick="displayCountryDetail('${country.name}')">Show Details</a>
        `;

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderCountryInfo(data[0]);
        })
    const renderCountryInfo = country => {
        const countryDiv = document.getElementById("countryDetails");
        countryDiv.innerHTML = `
                <h1>${country.name}</h1>
                <p>${country.population}</p>
                <p>${country.area}</p>
                <img src="${country.flag}">
            `
    }
}