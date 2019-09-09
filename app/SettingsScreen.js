import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import i18n from "app/utils/i18n";

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t("setting")}</Text>
        <Button
          title={i18n.t("go_to_detail")}
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
