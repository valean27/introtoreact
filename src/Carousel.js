import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 1,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  static firstName = "aladin";
  static lastName = "AladinLast";

  handleIndexClick(event) {
    console.log(this.test());
    this.setState({
      active: +event.target.dataset.index, // + makes it an integer.
    });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick.bind(this)}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
