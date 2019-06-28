import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "app/HomeScreen";
import DetailsScreen from "app/DetailsScreen";
import SettingsScreen from "app/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen }
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: "Home"
      }
    },
    Setting: {
      screen: SettingsStack,
      navigationOptions: {
        title: "Setting"
      }
    }
  },
  {}
);

export default createAppContainer(AppNavigator);
