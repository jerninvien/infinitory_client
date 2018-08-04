import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {
  LoadingScreen,
  AuthLanding,
  Login,
  LoggedIn,
  LoggedIn2,
  Registration,
  RegistrationComplete,
} from 'app/src/screens';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createDrawerNavigator({
  Home: LoggedIn,
  Home2: LoggedIn2,
});

const RegistrationStack = createSwitchNavigator(
  {
    Registration: {
      screen: Registration
    },
    RegistrationComplete: {
      screen: RegistrationComplete
    }
  }
);

const AuthStack = createStackNavigator(
  {
    AuthLanding: {
      screen: AuthLanding,
    },
    SignIn: {
      screen: Login,
      navigationOptions: {
        title: 'Login'
      },
    },
    Registration: {
      screen: RegistrationStack,
      navigationOptions: {
        title: 'Register'
      }
    }
  },
  {
    navigationOptions: {
      // headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: 'steelblue',
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    }
  }
);

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  }
);
