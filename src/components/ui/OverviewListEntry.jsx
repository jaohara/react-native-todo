import { StyleSheet, TouchableOpacity, View } from "react-native";

import StyledText from "./StyledText";
import useTheming from "../../hooks/useTheming";

const OverviewListEntry = ({ title = "No Title", onPress = () => {}}) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.background,
      borderRadius: theme.borderRadiusSmall,
      fontSize: theme.fontSizeButton,
      marginBottom: theme.margin,
      padding: theme.padding/2,
    }
  });

  // TODO: REFACTOR THIS! This should be the container that holds the button to 
  // create a new list.
  return (
    // <TouchableOpacity 
    //   onPress={onPress}
    //   style={style.wrapper}
    // >
    //   <StyledText>
    //     {title}
    //   </StyledText>
    // </TouchableOpacity>
    <View></View>
  );
};

export default OverviewListEntry;
