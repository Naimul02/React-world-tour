
import { useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import './Country.css'
const Country = ({country , handleVisitedCountry , handleVisitedFlags}) => {
  
  const {name , flags , population , area , cca3} = country;
  const [visited ,setVisited] = useState(false);

  const handleVisited = () => {
      // setVisited(true);
      // beng  , exlamatory sign ba not ooo bole
      setVisited(!visited);
  }

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color : visited ? 'purple' : 'black'}}>Name :  {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p><small>Code : {cca3}</small></p>
      <button onClick={() => handleVisitedCountry(country)}>Mark visited</button><br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button><br />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country.' : 'I want to visit'}

      <hr />
      <CountryDetail 
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;