import React, { Component, Fragment } from "react";
import Main from "./Components/Main";
import Couresol from "./Components/Couresol";
import CardSliderApp from "./Components/CardSlider";
import { ScrollView } from "react-native";
import ProuductSlider1 from "./Components/ProuductsSlider1";
import Footer from "./Components/Footer";
import AnimatedLoader from "react-native-animated-loader";

export default class App extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible,
      });
    }, 30000);
  }

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("./loader.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
        <ScrollView>
          <Main />
          <Couresol />
          <CardSliderApp />
          <ProuductSlider1 />
          <Footer />
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
  });