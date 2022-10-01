import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// navigation stuff
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes, routeNames } from "./src/routes";

// style stuff
import useTheming from './src/hooks/useTheming';

export default function App() {
  const Nav = createNativeStackNavigator();
  const theme = useTheming();

  const statusBarProps = {
    // Test
    backgroundColor: "#f00",
  };

  return (
    <NavigationContainer>
      <StatusBar {...statusBarProps} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
