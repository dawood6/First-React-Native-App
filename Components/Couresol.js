import React, { Component, Fragment } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class Couresol extends Component {
  state = {
    images: [
      {
        uri: "https://hummart.com/media/wysiwyg/sliders/EXP-may-resized.jpg",
      },
      {
        uri: "https://hummart.com/media/wysiwyg/sliders/phone-nation-web.jpg",
      },
      {
        uri: "https://hummart.com/media/wysiwyg/sliders/web_banner_1.jpg",
      },
    ],
  };


  _renderItem = ({item, index}) => {
    return (
        <View >
            <Image source={{ uri: item.uri }} key={index}  style={{width,height:200}}/>
        </View>
    );
}
  render() {
    return (
      <Fragment>
        <View >
        <Carousel
          layout={'stack'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.images}
          renderItem={this._renderItem}
          sliderWidth= {width}
          itemWidth={500}
          sliderHeight={height}
          itemHeight={10}
        />
        </View>
      </Fragment>
    );
  }
}

