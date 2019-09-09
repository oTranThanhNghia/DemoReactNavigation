import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import i18n from "app/utils/i18n";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t("home")}</Text>
        <Button
          title={i18n.t("go_to_detail")}
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
