import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import i18n from "app/utils/i18n";

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t("detail")}</Text>
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
