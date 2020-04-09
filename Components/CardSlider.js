import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");
const height = width * 0.6;

console.log(width);

export default class CardSilderApp extends Component {
  state = {
    categories: [
      {
        title: "Groceries",
        style: "skyblue",
      },
      {
        title: "Electronics",
        style: "lightsalmon",
      },
      {
        title: "Crokery",
        style: "teal",
      },
      {
        title: "SmartPhones",
        style: "lightpink",
      },
      {
        title: "Sports & Outdoor",
        style: "lightseagreen",
      },
      {
        title: "Health & Beauty",
        style: "lightcoral",
      },
      {
        title: "Pets",
        style: "lightsteelblue",
      },
      {
        title: "Babies & Toys",
        style: "mediumslateblue",
      },
    ],
  };

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Text
          style={{
            backgroundColor: item.style,
            color: "lightcyan",
            width,
            height,
            fontSize: 40,
            paddingTop: 80,
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              fontSize: 30,
              color: "#000",
              textAlign: "center",
              color: "dodgerblue",
              marginBottom: 20,
            }}
          >
            Categories
          </Text>
        </View>
        <Carousel
          layout={"tinder"}
          style={{ margin: 10 }}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.categories}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={width}
          sliderHeight={height}
          itemHeight={height}
        />
      </View>
    );
  }
}

// style={{fontSize: 30, color: '#000',marginTop: -170 ,textAlign: 'center', color: 'dodgerblue'}}

// style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}
