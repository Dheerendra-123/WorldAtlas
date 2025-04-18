import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom';

const Error = () => {

  const error= useRouteError();
  console.log(error);
  return (
   <div>
    <h1>Opps! An error Occurd</h1>
    {error && <p>{error.data}</p>}
    <NavLink to='/'> <button>Go Home</button></NavLink>
   </div>
  )
}

export default Error