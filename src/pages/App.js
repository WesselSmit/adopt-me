import SearchParams from '../components/SearchParams'


const App = () => {
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

  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  )
}


export default App
