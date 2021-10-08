import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import changeLocation from '../store/actions/changeLocation'
import changeAnimal from '../store/actions/changeAnimal'
import changeBreed from '../store/actions/changeBreed'
import changeTheme from '../store/actions/changeTheme'
import useBreedList from '../hooks/useBreedList'
import Results from './Results'


const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile']


const SearchParams = () => {
  const location = useSelector(state => state.location)
  const animal = useSelector(state => state.animal)
  const breed = useSelector(state => state.breed)
  const theme = useSelector(state => state.theme)
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)
  const dispatch = useDispatch()

  useEffect(() => {
    requestPets()
  }, [])

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const data = await res.json()

    setPets(data.pets)
  }

  const updateLocation = e => dispatch(changeLocation(e.target.value))
  const updateAnimal = e => {
    dispatch(changeBreed(''))
    dispatch(changeAnimal(e.target.value))
  }
  const updateBreed = e => dispatch(changeBreed(e.target.value))
  const updateTheme = e => dispatch(changeTheme(e.target.value))

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

        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            id="theme"
            onChange={updateTheme}
            onBlur={updateTheme}
          >
            <option />
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="green">green</option>
            <option value="orange">orange</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  )
}


export default SearchParams
