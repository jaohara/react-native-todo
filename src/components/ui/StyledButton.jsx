import { TouchableOpacity, StyleSheet, Text } from "react-native";

import useTheming from "../../hooks/useTheming";

const StyledButton = ({
  backgroundColor = undefined,
  onPress,
  title,
}) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    touchableOpacity: {
      backgroundColor: 
        backgroundColor === undefined ? theme.accent : theme.parseColor(backgroundColor),
      borderRadius: theme.borderRadiusBig,
      flex: 1,
      justifyContent: "center",
      marginBottom: 8,
      padding: theme.paddingButton,
      // width: 100%,
    }, 
    text: {
      color: theme.palette.white,
      textAlign: "center",
      fontSize: theme.fontSizeButton,
    }
  });

  return (
    <TouchableOpacity
      activeOpacity={.66}
      style={style.touchableOpacity}
      onPress={onPress}
    >
      <Text style={style.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
