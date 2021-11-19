import './App.css';
import DisplayController from './components/displayController';
import FormController from './components/formController';
import { useState } from 'react';
import NameContextProvider from './Context/actions';

function App() {
  const [name, setName] = useState('');

  const getName = (val) => {
    setName(val);
    console.log(name);
  };

  return (
    <div className="App">
      <NameContextProvider>
        <FormController getName={getName} />
        <DisplayController Name={name} />
      </NameContextProvider>
    </div>
  );
}

export default App;
