import { Text, StyleSheet } from "react-native"

import useTheming from "../../hooks/useTheming";

const StyledText = ({ children }) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    text: {
      color: theme.foreground,
    }
  });

  return (
    <Text style={style.text}>
      {children}
    </Text>
  );
};


export default StyledText;
