import React from 'react'

const SearchFilter = ({countries,setCountries,search,filter,setSearch,setFilter}) => {

    const handleInputChange=(event)=>{
        event.preventDefault();
        setSearch(event.target.value);
    }
    const handleSelectchange=(event)=>{
        event.preventDefault();
        setFilter(event.target.value);
    }

    const sortCountries=(value)=>{
        const sortCountry=[...countries].sort((a,b)=>{
            return value==='asc'
            ? a.name.common.localeCompare(b.name.common)
            :b.name.common.localeCompare(a.name.common);
        });
        setCountries(sortCountry);
    }
  return (
    <section className="section-searchFilter container">
        <input type="text" placeholder='search' value={search} onChange={handleInputChange} />
        <div>
            <select className="select-section" value={filter} onChange={handleSelectchange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        <div>
            <button onClick={()=>sortCountries('asc')}>Asc</button>
        </div>
        <div>
            <button onClick={()=>sortCountries('dsc')}>Desc</button>
        </div>
    </section>
  )
}

export default SearchFilter