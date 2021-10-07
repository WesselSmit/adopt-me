import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchParams from '../components/SearchParams'
import Details from './Details'


const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>

      <Router>
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
  )
}


export default App
