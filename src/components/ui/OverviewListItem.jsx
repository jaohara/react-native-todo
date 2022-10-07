import { StyleSheet, TouchableOpacity, View } from "react-native";

import StyledText from "./StyledText";
import useTheming from "../../hooks/useTheming";

const OverviewListItem = ({ title = "No Title", onPress = () => {}}) => {
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

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={style.wrapper}
    >
      <StyledText>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};

export default OverviewListItem;
