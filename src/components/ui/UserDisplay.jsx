import { Text, StyleSheet, View } from "react-native";

import useUser from "../../hooks/useUser";
import useTheming from "../../hooks/useTheming";

const UserDisplay = () => {
  const theme = useTheming();
  const { user } = useUser();

  const commonText = {
    fontStyle: "italic",
    fontSize: theme.fontSizeSmall,
  };

  const style = StyleSheet.create({
    loggedInText: {
      ...commonText,
      color: theme.foregroundAlt,
    },
    userText: {
      ...commonText,
      color: theme.accent,
    },
    wrapper: {
      marginBottom: theme.margin/2,
    }
  })

  return (
    <View style={style.wrapper}>
      <Text style={style.loggedInText}>
        Logged in as <Text style={style.userText}>{user}</Text>
      </Text>
    </View>
  );
};

export default UserDisplay;