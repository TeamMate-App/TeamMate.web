import React from "react";
import "./Home.css";
export default class changebgimg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://picsum.photos/200/300/?image=523",
        "https://picsum.photos/200/300/?image=524",
      ],
      selectedImage: "./hermes-rivera-newhL3aprGk-unsplash.jpg",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        if (prevState.selectedImage === this.state.images[0]) {
          return {
            selectedImage: this.state.images[1],
          };
        } else {
          return {
            selectedImage: this.state.images[0],
          };
        }
      });
    }, 10000);
  }

  render() {
    return (
      <>
        <div className="backgroundImg" src={this.state.selectedImage} alt="BackgroundImage" ></div>
      </>
    );
  }
}
