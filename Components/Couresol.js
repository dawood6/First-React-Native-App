import React, { Component, Fragment } from "react";
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.6;

const images = [
    "https://hummart.com/media/wysiwyg/sliders/EXP-may-resized.jpg",
    "https://hummart.com/media/wysiwyg/sliders/phone-nation-web.jpg",
    "https://hummart.com/media/wysiwyg/sliders/web_banner_1.jpg",
];

export default class Couresol extends Component {

    state = {
        active: 0
    }


    scroll = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)

        if (slide !== this.state.active) {
            this.setState({active: slide});
        }
    }
  render() {
    return (
        <Fragment>
      <View style={style.scrollView}>
        <ScrollView
          pagingEnabled
          onScroll={this.scroll}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={style.scroll}
        >
          {images.map((image, index) => (
            <Image
              style={style.image}
              source={{ uri: image }}
              key={index}
            />
          ))}
        </ScrollView>
      </View >
      <View style={style.indicator}>
       {
           images.map((i, k) => (
            <Text key={k} style={k=== this.state.active ? style.dotActive : style.dot}>•</Text>
           ))
       }
      </View>
  
      </Fragment>
    )}
    }


    const style = StyleSheet.create({
            scrollView: {
             width, 
             height, 
             marginBottom: 230  
            },
            scroll: {
                 width, 
                 height, 
                 marginTop: 50 
            },
            image: {
                width,
                height,
                resizeMode: "cover",
            },
            indicator: {
                flexDirection: "row",
                position: "absolute",
                top: 427,
                alignSelf: "center"
            },
            dot: {
                color: '#888',
                fontSize: (width / 30),
                margin: 3
            },
            dotActive: {
                color: 'dodgerblue',
                fontSize: (width / 30),
                margin: 3
            }
    })