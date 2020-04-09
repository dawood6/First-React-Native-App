import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class CardSilderApp extends Component {
  state = {
    categories: [
      {
        title: "Groceries",
        style: 'skyblue',
      },
      {
        title: "Electronics",
        style: 'lightsalmon',
      },
      {
        title: "Crokery",
        style: 'teal',
      },
      {
        title: "SmartPhones",
        style: 'lightpink',
      },
      {
        title: "Sports & Outdoor",
        style: 'lightseagreen',
      },
      {
        title: "Health & Beauty",
        style: 'lightcoral'
      },
      {
        title: "Pets",
        style: 'lightsteelblue'
      },
      {
        title: "Babies & Toys",
        style: 'mediumslatebluel'
      },
    ],
  };

  

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Text
          style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightcoral' }}
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
          <Text style={{
            fontSize: 30,
            color: "#000",
            textAlign: "center",
            color: "dodgerblue",
            marginTop: -170
          }}>Categories</Text>
        </View>
        <Carousel
          layout={'tinder'}
          style={{margin: 10}}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.categories}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={height}
        />
      </View>
    );
  }
}

// style={{fontSize: 30, color: '#000',marginTop: -170 ,textAlign: 'center', color: 'dodgerblue'}}

// style={{color: 'lightcyan', fontSize: 24, fontWeight: 'bold'}}
