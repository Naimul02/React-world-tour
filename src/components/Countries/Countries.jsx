import { useEffect, useState } from "react";
import Country from "../Country/Country";


import './Countries.css'
const Countries = () => {
  const [countries , setCountries] = useState([]);

  const [visitedCountries , setVisitedCountries] = useState([])

  useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  } , [])

  const handleVisitedCountry = country => {
    console.log('add this to your visited country')
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
  }
  return (
    <div>
        <h3>Countries</h3>
        <div>
            <h5>Visited countries</h5>
            <ul>
                  {
                      visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                  }
            </ul>
        </div>
        
        {/* ekhane key ta deya hoy karon,dhoro  react 5000 jon er data jodi pay tahole egulo k handle korte ektu problem hoye thake . tooo egulo handle korar jonno ei data gulo cenar jonno muloto ei unique key use kora hoye thake. */}
          <div className="country-container">
          {
                countries.map(country => <Country key={country.cca3} country={country}
                  handleVisitedCountry={handleVisitedCountry}
                ></Country>)
              }
          </div>
        
    </div>
  );
};

export default Countries;