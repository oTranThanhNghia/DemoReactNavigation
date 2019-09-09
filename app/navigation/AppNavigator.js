import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "app/HomeScreen";
import DetailsScreen from "app/DetailsScreen";
import SettingsScreen from "app/SettingsScreen";
import i18n from "app/utils/i18n";

const back_title = i18n.t("back");

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: back_title
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen }
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: back_title
    }
  }
);

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: i18n.t("home")
    }
  },
  Setting: {
    screen: SettingsStack,
    navigationOptions: {
      title: i18n.t("setting")
    }
  }
});

export default createAppContainer(AppNavigator);
