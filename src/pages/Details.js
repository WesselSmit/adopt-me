import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'
import ErrorBoundary from '../components/ErrorBoundary'
import Carousel from '../components/Carousel'
import Modal from '../components/Modal'

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  }

  async componentDidMount() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
    const data = await res.json()

    this.setState(
      Object.assign(
        { loading: false },
        data.pets[0]
      )
    )
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })
  adopt = () => window.location = 'http://bit.ly/pet-adopt'

  render() {
    const { animal, breed, city, state, images, description, name, showModal } = this.state

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

          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          { showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null }
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
