import { useState } from 'react'

import React from 'react'

function findPerson(arr, person) {
  return arr.find((element) => {
    return element.name === person;
  })
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setShowAll(event.target.value)
  }
  const peopleToShow = showAll    
    ? persons.filter(person => person.name.toLowerCase().match(showAll))    
    : persons

  const addPerson = (event) => {
    event.preventDefault()
    if (findPerson(persons, newName)) {
      window.alert(`${newName} is already in the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <div>
          Filter: <input value={showAll} onChange={handleFilterChange} />
      </div>
      <h2>Add Person</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson} >add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      <div>
        {peopleToShow.map((item)=>(
          <>
          <p key={item.id}>{item.name}, {item.number}</p>
          </>
        ))}
      </div>

    </div>
  )
}

export default App