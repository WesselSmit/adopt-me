import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'
import Details from './Details'
import SearchParams from '../components/SearchParams'

const App = () => {
  const theme = useState('darkblue')

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
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
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}


export default App
