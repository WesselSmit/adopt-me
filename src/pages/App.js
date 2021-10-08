import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'


const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('../components/SearchParams'))


const App = () => {
  const theme = useState('darkblue')

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Suspense fallback={<h2>Loading route...</h2>}>
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
        </Suspense>
      </div>
    </ThemeContext.Provider>
  )
}


export default App
