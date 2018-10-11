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

import Ionicons from 'react-native-vector-icons/Ionicons';

const AppStack = createBottomTabNavigator(
  {
    Devices: LoggedIn,
    Members: LoggedIn2,
  },
  // {
  //   tabBarPosition: ‘bottom’,
  //   swipeEnabled: true,
  //   tabBarOptions: {
  //   activeTintColor: ‘#f2f2f2’,
  //   activeBackgroundColor: “#2EC4B6”,
  //   inactiveTintColor: ‘#666’,
  //   labelStyle: {
  //    fontSize: 22,
  //    padding: 12
  //   }
  //  }
  // }
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === 'Devices') {
  //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //       } else if (routeName === 'Members') {
  //         iconName = `ios-options${focused ? '' : '-outline'}`;
  //       }
  //
  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return <Ionicons name={iconName} size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray',
  //   },
  // }
);

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
