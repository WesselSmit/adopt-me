import { StrictMode, useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'
import Details from './Details'
import SearchParams from '../components/SearchParams'

const App = () => {
  const theme = useState('darkblue')

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>

          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>

            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  )
}


export default App
