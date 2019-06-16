import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const imageHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(imageHeight / 15 + 1);
    this.setState({spans})
  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img className="img-thumbnail" ref={this.imageRef} alt={description} src={urls.small} />
      </div>
    );
  }
}

export default ImageCard;
