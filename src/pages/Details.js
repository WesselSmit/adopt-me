import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary'
import Carousel from '../components/Carousel'


class Details extends Component {
  state = { loading: true }

  async componentDidMount() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
    const data = await res.json()

    this.setState({
      loading: false,
      ...data.pets[0]
    })
  }

  render() {
    const { animal, breed, city, state, images, description, name } = this.state

    if (this.state.loading) {
      return <h2>Loading...</h2>
    }

    return (
      <div className="details">
        <Carousel images={images} />

        <div>
          <h1>{name}</h1>
          <h2>{animal} - {breed} - {city}, {state}</h2>
          <p>{description}</p>

          <button>Adopt {name}</button>
        </div>
      </div>
    )
  }
}


const DetailsWithRouter = withRouter(Details)

const _Details = () => {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  )
}


export default _Details
