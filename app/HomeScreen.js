import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <Text> App version 1.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
