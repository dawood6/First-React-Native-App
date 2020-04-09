import React, { Component, Fragment } from "react";
import Main from "./Components/Main";
import Couresol from "./Components/Couresol";
import CardSliderApp from "./Components/CardSlider";
import { ScrollView, View, Image,Text, Dimensions } from "react-native";
import ProuductSlider1 from "./Components/ProuductsSlider1";
import Footer from "./Components/Footer";
import PreLoader from "./Components/Pre-Loader";


const { width } = Dimensions.get("window");
const height = width * 0.6;
export default class App extends Component {
  state = {
    loaded: false,
  };

  constructor() {
    super(); 
    PreLoader.load((v) => this.setState({ loaded: true }));
  }

  render() {
    return (
      <Fragment>
        { this.state.loaded ?
         
          <ScrollView>  
            <Main />
            <Couresol />
            <CardSliderApp />
            <ProuductSlider1 />
            <Text></Text>
            <Footer />
          </ScrollView>
          :<Image 
          source={require('./Components/Images/17681-delivery-boy-animation.gif')} 
          style={{marginLeft: -30, width,height, marginTop: 200,}}
          
          />
        }
      </Fragment>
    );
  }
}
