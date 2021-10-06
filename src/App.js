import ReactDOM from 'react-dom'
import Pet from './components/Pet'

const pets = [
  {
    name: 'Luna',
    animal: 'Dog',
    breed: 'havanese',
  },
  {
    name: 'Pepper',
    animal: 'Bird',
    breed: 'Cockatiel',
  },
  {
    name: 'Sudo',
    animal: 'Dog',
    breed: 'Wheaten Terrier',
  }
]


const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      { pets.map(pet => <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.name} />) }
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'))
