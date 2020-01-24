import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../screens/MainScreen';
import { LogInScreen } from '../screens/auth/LogInScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';

const WalletNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      headerMode: 'none',
      navigationOptions: {
        headerTitle: '',
        headerShown: false
      }
    },
    LogIn: LogInScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: 'Main'
  }
);
export const LogInNavigation = createAppContainer(WalletNavigator);
