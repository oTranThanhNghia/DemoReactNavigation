import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Setting</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
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
