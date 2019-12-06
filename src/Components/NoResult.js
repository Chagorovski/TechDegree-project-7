import React from 'react';

// Shows not found if there is no match
const NoResult = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  )
}

export default NoResult;