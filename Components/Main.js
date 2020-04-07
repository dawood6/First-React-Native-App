import React, { Fragment } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MarqueeText from "react-native-marquee";

export default function Main() {
  return (
    <Fragment>
      <View style={styles.logoContainer}>
        <Image source={require("./Images/logo.png")} style={styles.logo} />
        <MarqueeText
          style={styles.marquee}
          duration={3000}
          marqueeOnStart
          loop
        >
          Please Note That Delivery Time is 9 Am To 4 Pm. Because Of LockDown In
          The City.
        </MarqueeText>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  marquee: {
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    color: 'red',
  },
});
