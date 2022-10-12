import { StatusBar } from "expo-status-bar";
import { View, ScrollView, StyleSheet } from "react-native";

import useTheming from "../../hooks/useTheming";

const ScreenView = ({ 
  children, 
  hideStatusBar = false,
  navigation,
  usesHiddenNav = false,
  useScrollView = true,
}) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    screen: {
      backgroundColor: theme.background,
      flex: 1,
      padding: theme.paddingScreen,
      paddingTop: usesHiddenNav ? theme.paddingHiddenNav : theme.paddingScreen,
    }
  });

  const renderView = () => {
    const renderedNode = useScrollView ? 
      (
        <ScrollView style={style.screen}>
          <StatusBar hidden={hideStatusBar}/>
          {children}
        </ScrollView>
      ) : 
      (
        <View style={style.screen}>
          <StatusBar hidden={hideStatusBar}/>
          {children}
        </View>
      ); 

    return renderedNode;
  };

  return (renderView());
};

export default ScreenView;