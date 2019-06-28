import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "app/Home";
import Details from "app/Details";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
