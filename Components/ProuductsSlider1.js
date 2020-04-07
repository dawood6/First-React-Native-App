import React, { Component, Fragment } from "react";
import { Image, Text, View } from "react-native";
import CardSilder from "react-native-cards-slider";
import CountDown from "react-native-countdown-component";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GreenTea from "./GreenTea";
import Westpoint from "./Westpoint";
import safeGuard from "./safegurad";
import SafeHand from "./SafeHand";

export default class ProuductSlider1 extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            color: "#000",
            marginTop: 80,
            color: "dodgerblue",
          }}
        >
          Flash Sale ⚡
        </Text>
        <CountDown
          style={{ marginLeft: 120, marginTop: -45 }}
          digitTxtStyle={{ color: "dodgerblue" }}
          digitStyle={{ backgroundColor: "#000" }}
          until={2000}
          timeToShow={["H", "M", "S"]}
          size={20}
        />
        <CardSilder>
          <Image
            style={{ height: 270, width: 200, margin: 10, marginLeft: 70 }}
            source={{
              uri:
                "http://static-01.daraz.pk/original/8b3c21e5d7c0f2f14736126ca70bfd02.jpg",
            }}
            onPress={() => this.props.navigation.navigate("SafeHand")}
          />
          <Image
            style={{ height: 270, width: 200, margin: 10, marginLeft: 70 }}
            source={{
              uri:
                "https://static-01.daraz.pk/original/c8a642be3c6ffd3436d770525c23f96d.jpg",
            }}
            onPress={() => navigation.navigate("Westpoint")}
          />
          <Image
            style={{ height: 270, width: 200, margin: 10, marginLeft: 70 }}
            source={{
              uri:
                "http://static-01.daraz.pk/p/a111e6deb9a1a0049d4a307f543d64cd.jpg",
            }}
            onPress={() => navigation.navigate("Green")}
          />
          <Image
            style={{ height: 270, width: 200, margin: 10, marginLeft: 70 }}
            source={{
              uri:
                "https://static-01.daraz.pk/p/4f28e730fef7d78a194fa8295813ef6d.jpg",
            }}
            onPress={() => navigation.navigate("safeGuard")}
          />
        </CardSilder>
      </View>
    );
  }
}

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Green" component={GreenTea} />

          <Stack.Screen name="Westpoint" component={Westpoint} />

          <Stack.Screen name="safeGuard" component={safeGuard} />

          <Stack.Screen name="SafeHand" component={SafeHand} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};
