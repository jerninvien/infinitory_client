import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import {
  LoadingScreen,
  AuthLanding,
  // Login,
  LoggedIn,
  LoggedIn2,
  // Registration,
  // RegistrationComplete,
} from 'app/src/screens';

// console.log('AuthLanding', AuthLanding);

const AppStack = createBottomTabNavigator({
  Devices: LoggedIn,
  Members: LoggedIn2,
});

// const RegistrationStack = createSwitchNavigator(
//   {
//     Registration: {
//       screen: Registration
//     },
//     RegistrationComplete: {
//       screen: RegistrationComplete
//     }
//   }
// );

const AuthStack = createStackNavigator(
  {
    AuthLanding: {
      screen: AuthLanding,
    },
    // SignIn: {
    //   screen: Login,
    //   navigationOptions: {
    //     title: 'Login'
    //   },
    // },
    // Registration: {
    //   screen: RegistrationStack,
    //   navigationOptions: {
    //     title: 'Register'
    //   }
    // }
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
