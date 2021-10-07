
import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class ErrorBoundary extends Component {
  state = {
    hasError : false,
    redirect: false
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(err, info) {
    console.error("ErrorBoundary caught an error: ", err, info)

    setTimeout(() => {
      this.setState({ redirect: true })
    }, 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    if (this.state.hasError) {
      return (
        <h2>An error occured. <Link to="/">Go back to the home page</Link> or wait five seconds.</h2>
      )
    }

    return this.props.children
  }
}


export default ErrorBoundary
