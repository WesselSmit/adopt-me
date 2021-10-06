import { useState, useEffect } from 'react'
import Pet from './Pet'


const animals = ['bird', 'dog', 'cat', 'rabbit', 'fish']


const SearchParams = () => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const breeds = []

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

  return (
    <div className="search-params">
      <form>
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

      {
        pets.map(pet => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      }
    </div>
  )
}


export default SearchParams
