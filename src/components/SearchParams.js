import { useState } from 'react'


const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA')

  const updateLocation = e => setLocation(e.target.value)

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

        <button>Submit</button>
      </form>
    </div>
  )
}


export default SearchParams
