import React, { useState } from 'react';
import { useContext } from 'react';
import { NameContext } from '../Context/actions';

const FormController = () => {
  const { changeName } = useContext(NameContext);

  const [val, setVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    changeName(val);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormController;
