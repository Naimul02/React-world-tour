import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
  const [countries , setCountries] = useState([]);

  useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  } , [])
  return (
    <div>
        <h3>Countries</h3>
        {
          // ekhane key ta deya hoy karon,dhoro  react 5000 jon er data jodi pay tahole egulo k handle korte ektu problem hoye thake . tooo egulo handle korar jonno ei data gulo cenar jonno muloto ei unique key use kora hoye thake.
            countries.map(country => <Country key={country.cca3} country={country}></Country>)
        }
    </div>
  );
};

export default Countries;