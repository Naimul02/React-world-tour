import { useEffect, useState } from "react";
import Country from "../Country/Country";


import './Countries.css'
const Countries = () => {
  const [countries , setCountries] = useState([]);

  const [visitedCountries , setVisitedCountries] = useState([])
  const [visitedFlags , setVisitedFlags] = useState([]);

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

  const handleVisitedFlags = flag => {
      const newVisitedFlag = [...visitedFlags , flag];
      setVisitedFlags(newVisitedFlag)

      // remove item from an array in a state
      // use filter to select all the elements except the one you want to remove 
      

  }
  return (
    <div>
        <h3>Countries</h3>
        {/* visited countries */}
        <div>
            <h5>Visited countries</h5>
            <ul>
                  {
                      visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                  }
            </ul>
        </div>

        <div className="flag-container">
              {
                // map er moddhe by default 3ta parameter thake 1.currentValue 2.index 3.arr
                  visitedFlags.map((flag , idx) => <img key={idx} src={flag}/>)
              }
        </div>
        
        {/* ekhane key ta deya hoy karon,dhoro  react 5000 jon er data jodi pay tahole egulo k handle korte ektu problem hoye thake . tooo egulo handle korar jonno ei data gulo cenar jonno muloto ei unique key use kora hoye thake. */}


        {/* display countries */}
          <div className="country-container">
          {
                countries.map(country => <Country key={country.cca3} country={country}
                  handleVisitedFlags={handleVisitedFlags}
                  handleVisitedCountry={handleVisitedCountry}
                ></Country>)
              }
          </div>
        
    </div>
  );
};

export default Countries;