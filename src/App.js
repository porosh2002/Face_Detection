import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./Navigation";
import Input from "./Input";
import Button from "./Button";
import Clarifai from "clarifai";
import Image from "./Image";
import "tachyons";
import "./App.css";
const app = new Clarifai.App({
  apiKey: "f5badeafd5ef42738827a66705fb73c0",
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      boxes:[],
    };
  }
  oninputchange = (event) => {
    this.setState({ input: event.target.value });
  };
  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(faces=>{
      const clarifaiFace =faces.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    })
  }
  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
  }
  onclick_btn = () => {
    this.setState({ imageURL: this.state.input });
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(response=>this.displayFaceBox(this.calculateFaceLocations(response)))
      .catch(err=>console.log(err))
  };
  render() {
    return (
      <div>
        <Particles className="Particles" params={particlesOpt} />
        <Navigation />
        <div className="hero">
          <div className="w-75 srch_br">
            <Input
              placeholder={"Enter Image URL"}
              type={"text"}
              name={"input_url_box"}
              oninputchange={this.oninputchange}
            />
          </div>
          <div className="tc w-25">
            <Button onclick_btn={this.onclick_btn} />
          </div>
        </div>
        <Image box={this.state.boxes} imageURL={this.state.imageURL} />
      </div>
    );
  }
}
const particlesOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
export default App;
