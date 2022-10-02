import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// navigation stuff
import { DefaultTheme, DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./src/routes";

// style stuff
import useTheming from './src/hooks/useTheming';

// test values
import defaults from './src/defaults';

export default function App() {
  const Nav = createNativeStackNavigator();
  const theme = useTheming();

  // App State
  const [ user, setUser ] = useState(defaults.user);
  const [ ]



  // These prop objects are a good example of how I want to go about theming dynamically
  const statusBarProps = {
    backgroundColor: theme.background,
  };

  const navigatorProps = {
    // TODO: Hardcoded initial route for now
    initialRouteName: "Test",
    screenOptions: {
      cardStyle: {
        backgroundColor: theme.background,
      },
      headerStyle: {
        backgroundColor: theme.background,
      },
      // this is the foreground color
      headerTintColor: theme.foreground,
    },
  }

  const renderRoutes = () => 
    routes.map(route => (<Nav.Screen {...route} key={`screen-${route.name}`}/>));

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <StatusBar {...statusBarProps} />

        <Nav.Navigator {...navigatorProps}>
          {renderRoutes()}
        </Nav.Navigator>
      </NavigationContainer>
    </View>
  );
}
