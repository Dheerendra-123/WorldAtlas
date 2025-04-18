import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {flags,name,population,region,capital}=country;
  return (
    <li className='country-card card'>
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt} />
            <div className="countryInfo">
                <p className="card-title">
                    {name.common.length>10?name.common.slice(0,20):name.common}
                </p>
                <p>
                    <span className="card-description">Population:</span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className="card-description">Region:
                        {region}
                    </span>
                </p>
                <p>
                    <span className="card-description">Capital:
                        {capital[0]}
                    </span>
                </p>
                <NavLink to={`/country/${name.common}`}><button>Read More</button></NavLink>
            </div>
        </div>
    </li>
  )
}

export default CountryCard;