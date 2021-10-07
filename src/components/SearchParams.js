import { useState, useEffect } from 'react'
import useBreedList from '../hooks/useBreedList'
import Results from './Results'


const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile']


const SearchParams = () => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)

  useEffect(() => {
    requestPets()
  }, [])

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const data = await res.json()

    setPets(data.pets)
  }

  const updateLocation = e => setLocation(e.target.value)
  const updateAnimal = e => setAnimal(e.target.value)
  const updateBreed = e => setBreed(e.target.value)

  const submitForm = e => {
    e.preventDefault()
    requestPets()
  }

  return (
    <div className="search-params">
      <form onSubmit={submitForm}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="location"
            value={location}
            onChange={updateLocation} />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={updateAnimal}
            onBlur={updateAnimal}
          >
            <option />
            {
              animals.map(animal => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={updateBreed}
            onBlur={updateBreed}
          >
            <option />
            {
              breeds.map(breed => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))
            }
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  )
}


export default SearchParams
