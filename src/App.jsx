import React, { useState } from 'react';
import Rajaus from './Okei';
import PersonsList from './PersonsList';
import FormList from './FormList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '565345254'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const addPerson = (e) => {
    e.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };

      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Rajaus newFilter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new contact</h2>
      <FormList
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={filter} />
    </div>
  );
}

export default App;
