
import { Component } from 'react'
import { Link } from 'react-router-dom'


class ErrorBoundary extends Component {
  state = { hasError : false}

  static getDerivedStateFromError() {
    return { hasError: true }
  }



  render() {
    if (this.state.hasError) {
      return (
        <h2>An error occured. <Link to="/">Go back to the home page</Link>.</h2>
      )
    }

    return this.props.children
  }
}


export default ErrorBoundary
