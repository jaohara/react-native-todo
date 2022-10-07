import { Text, StyleSheet } from "react-native"

import useTheming from "../../hooks/useTheming";

const HeaderText = ({ children }) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    text: {
      borderColor: theme.accent,
      borderRightWidth: 8,
      color: theme.foreground,
      // height: theme.fontSizeHeader + 2,
      fontWeight: "bold",
      fontSize: theme.fontSizeHeader,
      marginTop: 4,
      marginBottom: 4,
      // paddingLeft: 8,
    }
  });

  return (
    <Text style={style.text}>
      {children}
    </Text>
  );
};


export default HeaderText;
