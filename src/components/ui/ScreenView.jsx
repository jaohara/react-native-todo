import { View, ScrollView, StyleSheet } from "react-native";

import useTheming from "../../hooks/useTheming";

const ScreenView = ({ children, useScrollView = true }) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    screen: {
      backgroundColor: theme.background,
      flex: 1,
      padding: theme.paddingScreen,
    }
  });

  const renderView = () => {
    return useScrollView ? 
      (<ScrollView style={style.screen}>{children}</ScrollView>) : 
      (<View style={style.screen}>{children}</View>); 
  };

  return (renderView());
};

export default ScreenView;