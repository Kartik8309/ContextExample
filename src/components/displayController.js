import React from 'react';
import { useContext } from 'react';
import { NameContext } from '../Context/actions';

const DisplayController = () => {
  const { user } = useContext(NameContext);

  return (
    <div>
      <h1>Hi {user}</h1>
    </div>
  );
};

export default DisplayController;
