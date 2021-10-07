import { Component } from 'react'


class Carousel extends Component {
  state = {
    active: 0
  }

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  }

  handleClick = (e) => {
    this.setState({
      active: parseInt(e.target.dataset.index)
    })
  }

  render() {
    const { active } = this.state
    const { images } = this.props

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />

        <div className="carousel-smaller">
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              data-index={i}
              onClick={this.handleClick}
              className={i === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}


export default Carousel
