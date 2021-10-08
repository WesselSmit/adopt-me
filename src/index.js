import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'


hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
